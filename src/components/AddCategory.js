import React, { useState } from "react";
import PropTypes from "prop-types";
const AddCategory = ({ setCategories }) => {
	const [inputValue, setinputValue] = useState("");

	const handleInputChange = ev => {
		setinputValue(ev.target.value);
	};

	const handleSubmit = ev => {
		ev.preventDefault();
		if (inputValue.trim().length > 2) {
			setCategories(data => [inputValue, ...data ]);
			setinputValue("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' value={inputValue} onChange={handleInputChange} />
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
export default AddCategory;
