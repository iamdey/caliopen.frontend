import React from 'react';
import './style.scss';
import InputText from '../../../../../InputText';

const SearchField = () => (
  <div className="m-search-field">
    <form>
      <InputText
        placeholder={'header.menu.search'}
        className="m-search-field__input m-input-text"
      />
      <button
        className="m-search-field__button fa fa-search"
        type="button"
        aria-label={'header.menu.search'}
      />
    </form>
  </div>
);

export default SearchField;
