import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Report } from "../schema/Report.schema";
import { MongoRepository } from "typeorm";
import { CreateReportDto } from "../dto/CreateReport.dto";
import mongoose from  "mongoose";

@Injectable()
export class ReportService {
    constructor(
        @InjectRepository(Report) private readonly reportRepository: MongoRepository<Report>
    ){}

    async findById(id: number): Promise<Report | null>{
        try {
            const findReport = this.reportRepository.findOneBy({_id: new mongoose.Types.ObjectId(id)});
            return findReport;
        } catch (error) {
            return null;
        }
    }

    async findByUserId(userId: number): Promise<Report[]>{
        return this.reportRepository.find({userId});
    }

    async persistReport( dto: CreateReportDto ): Promise<Report>{
        const newReport = new Report();
        newReport.cameraName = dto.cameraName;
        newReport.confidence = dto.confidence;
        newReport.detection = dto.detection;
        newReport.timeStamp = dto.timeStamp;
        newReport.userId = dto.userId;
        newReport.imageURL = dto.imageURL;
        return this.reportRepository.save(newReport);
    } 

    async deleteReportById(report: Report) {
        this.reportRepository.remove(report);
    }


}