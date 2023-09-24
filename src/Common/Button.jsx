/**
 * Botón general
 * 
 * @param text Texto del botón 
 * @param onClick Función de retorno para manejar click en el botón 
 */
export default function Button({text, onClick}) {
    return (
        <>
            <button onClick={onClick} type="button" className="p-2 border-2 rounded-md bg-slate-300 hover:bg-slate-100 active:bg-slate-300 shadow-md">
                {text}
            </button>
        </>
    )
}