export const buttonsStyles = {
        "pending": {
        color: `bg-yellow-500 hover:yellow-600`,
            textColor: "text-yellow-500",
            nextColor: `bg-blue-500 hover:blue-600`,
            nextStep: "processo",
        },
        "process": {
            color: `bg-blue-500 hover:blue-600`,
            textColor: "text-blue-500",
            nextColor: `bg-green-500 hover:green-600`,
            nextStep: "completado",
        },

        "completed": {
            color: `bg-green-500 hover:green-600`,
            textColor: "text-green-500",
            nextColor: `bg-yellow-500 hover:yellow-600`,
            nextStep: "pendiente",
        }
}