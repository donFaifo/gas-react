/**
 * Título genérico 4xl
 * 
 * @param {*} text Texto del título 
 */
export default function Title({text}) {
    return (
        <>
            <div className="text-4xl font-black">
                {text}
            </div>
        </>
    )
}