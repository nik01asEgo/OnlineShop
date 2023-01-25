import React from "react";
import { useInput } from "../hooks/useInput.jsx";
import '../less/searchForm.less';

export default function SearchForm({ onSearch = f => f }) {
    const [titleProps, resetTitle] = useInput("");
    const submit = event => {
        event.preventDefault();
        onSearch(titleProps);
        resetTitle();
    };
    return (
        <form className="form" onSubmit={submit}>
            <div className="form__wrapper">
                <input
                    className="form__input"
                    {...titleProps}
                    type="text"
                    placeholder="lego?"
                    required
                />
                <button className="form__button">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </button>
            </div>
        </form>
    );
}