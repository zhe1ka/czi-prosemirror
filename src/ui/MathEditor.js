// @flow

import React from 'react';

import CustomButton from './CustomButton';
// import MathQuillEditor from './mathquill-editor/MathQuillEditor';
import preventEventDefault from './preventEventDefault';
import uuid from './uuid';

import './czi-form.css';

class MathEditor extends React.PureComponent<any, any, any> {
  props: {
    initialValue: ?string,
    close: (latex: ?string) => void,
  };

  state = {
    initialValue: this.props.initialValue,
    value: this.props.initialValue || '',
  };

  _id = uuid();
  _unmounted = false;

  render(): React.Element<any> {
    const {initialValue, value} = this.state;
    return (
      <div className="czi-math-editor">
        <form className="czi-form" onSubmit={preventEventDefault}>
          <fieldset>
            <legend>Insert Math</legend>
            {/*<MathQuillEditor onChange={this._onChange} value={value} />*/}
          </fieldset>
          <div className="czi-form-buttons">
            <CustomButton label="Cancel" onClick={this._cancel} />
            <CustomButton
              active={true}
              disabled={!this.state.value}
              label={initialValue ? 'Update' : 'Insert'}
              onClick={this._insert}
            />
          </div>
        </form>
      </div>
    );
  }

  _onChange = (value: string): void => {
    this.setState({value});
  };

  _cancel = (): void => {
    this.props.close();
  };

  _insert = (): void => {
    this.props.close(this.state.value);
  };
}

export default MathEditor;
