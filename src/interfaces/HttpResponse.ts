export class HttpResponse {
    private code: number;
    private message: ReportMessage | UserMessage;
    private data: any;

    constructor(code: number, message: ReportMessage | UserMessage, data: any = null)
    {
        this.code = code;
        this.message = message;
        this.data = data;
    }



}

type ReportMessage = "Reporte no encontrado" | "Reporte encontrado correctamente" 
| "Reporte guardado correctamente" | "Reporte eliminado"
| "Reportes encontrados correctamente"| "El usuario no tiene reportes guardados";

type UserMessage = "Usuario no encontrado" | "El email ingresado ya se encuentra registrado" 
| "Usuario registrado exitosamente" | "Inicio de sesion exitoso"
| "Contraseña incorrecta"| "Correo o contraseña incorrectos."
| "Token de usuario válido";