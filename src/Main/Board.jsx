/**
 * Cuadro con contenido general
 * 
 * @param {title} title Título del cuadro
 * @returns JSX
 */
export default function Board({title, children}) {
    return (
        <div className="p-2 border shadow-md rounded-md">
            <div className="font-bold mb-3">{title}</div>
            <div className="p-2">
                {children}
            </div>
        </div>
    )
}