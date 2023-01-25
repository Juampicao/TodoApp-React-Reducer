export const buttonsStyles = {
        "pending": {
            color: `bg-yellow-500 hover:yellow-600`,
            border: `border-yellow-500`,
            textColor: "text-yellow-500",
            nextColor: `bg-blue-500 hover:blue-600`,
            nextStep: "Proceso",
        },
        "process": {
            color: `bg-blue-500 hover:blue-600`,
            border: `border-blue-500`,
            textColor: "text-blue-500",
            nextColor: `bg-green-500 hover:green-600`,
            nextStep: "Completado",
        },

        "completed": {
            color: `bg-green-500 hover:green-600`,
            border: `border-green-500`,
            textColor: "text-green-500",
            nextColor: `bg-yellow-500 hover:yellow-600`,
            nextStep: "Pendiente",
        }
}