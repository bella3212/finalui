import React, { useState } from "react";
import "../Styles/GlobalStyle.css"
import "../fonts/Ubuntu-Regular.ttf"


export function Add_form_for_search(lable_text, filters_from_config) {
    let next_page_route = '/Home/TPage/'
    const [pk_search, setSearch] = useState({});
    let filters_list = filters_from_config.split(',')
    const handleSubmit = (event) => {
        console.log("handleSubmit")
        let filter_key = document.getElementById("filter_key_" + lable_text).value
        let filter_value = document.getElementById("filter_value_" + lable_text).value
        let dict = {}
        dict[filter_key] = filter_value
        event.preventDefault();
        setSearch(dict);
        console.log(pk_search)

        window.location.href = next_page_route + filter_key + '/' + filter_value

    };
    return (

        <form onSubmit={handleSubmit} class="sideBySideForm">
            <div class="row">
                <div class="column"> {lable_text}</div>
                <input class="form-control" type="text" id={"filter_key_" + lable_text} list={lable_text} autocomplete="off" placeholder="Choose to Search" />
                <datalist id={lable_text} role="listbox">
                    {filters_list.map((item) =>
                        <option id={item} value={item}></option>
                    )}
                </datalist>
                <input type="text" id={"filter_value_" + lable_text} />
                <button class="btnStyle" type="submit"><span class="spStyle">Search</span></button>

            </div>
        </form>
    )

}
