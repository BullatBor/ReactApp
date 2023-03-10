import React from "react";
import Myinput from "./UI/UI/input/MyInput";
import MySelect from "./UI/UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Myinput
            value = {filter.query}
            onChange = {e => setFilter({...filter, query: e.target.value})}
            placeholder="поиск..."
            />
            <MySelect
            value = {filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue="Сортировка"
            options={[
              {value: 'title', name: 'По названию'},
              {value: 'body', name: 'По описанию'}
            ]}
            />
        </div>
    )
}

export default PostFilter;