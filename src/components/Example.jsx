import reat, { useState } from "react"

const Example = () => {
    const [example, setExample] = useState(" Hello I am here !")
    const [inputValue, setInputValue] = useState("")

    const changeValue = () => {
        setExample(inputValue)
    }
    return <>

        <div >
            <p>
                {example}
            </p>

        </div>

        <div>
            <form action="">
                <input className="bg-primary" type="text" name="example" id="" onChange={(e) => setInputValue(e.target.value)} />
            </form>
            <button className=" bg-amber-600 rounded-lg border-amber-700" onClick={changeValue}>
                Change example
            </button>
        </div>
    </>
}

export default Example