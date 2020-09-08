import React, { useRef } from "react"

// clear the input field for an uncontrolled (stateless element) using ref:
// 1. import { useRef }
// 2. const refContainer = useRef(initialState)
// 3. add ref={refContainer} to the input field
// 4. onSubmit/onClick -> refContainer.current.value = ""
// 5. To focus back onto the input field -> refContainer.current.focus()


const AddElementForm = props => {

    const { elements, setElements } = props
    let element = {
        name: "",
        isComplete: false
    };

    const refContainer = useRef("")


    const onChange = (e) => {
        element.name = e.target.value
    };
    const onSubmit = (e) => {
        e.preventDefault()
        setElements( [...elements, element] )
        refContainer.current.value = ""
        refContainer.current.focus()
        }

    return (
        <div className="row">
            <div className="col-6 offset-3">
                <form onSubmit = { onSubmit }>
                    <div className="form-group">
                        <label>Add element:</label>
                        <input onChange = { onChange } ref={refContainer} id="elementInput" type="abc" name="input" className="form-control"></input>
                    </div>
                    <div className="form-group text-right">
                        <button className="btn btn-primary btn-sm">Add an element</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default AddElementForm