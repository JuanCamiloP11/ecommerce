import React, { Component, Fragment } from "react";
import Select from "react-select";

const options = [
  { value: "Hombre", label: "Hombre" },
  { value: "Mujer", label: "Mujer" },
  { value: "Niños", label: "Niños" }
];

export default class Categorías extends Component {
    state = {
      selectedOption: null
    };
    handleChange = selectedOption => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    };
    render() {
      return (
        <Fragment>
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={options[0]}
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isRtl={false}
            isSearchable={true}
            name="Categoría"
            options={options}
            onChange={this.handleChange}
          />
        </Fragment>
      );
    }
  }

