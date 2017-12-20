import React from 'react';
import { render } from 'react-dom';
import ReactPhoneInput from './index';

export default render(
  <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: '15px' }}>
    <div style={{ display: 'inline-block', verticalAlign: 'top', marginRight: '30px' }}>
      <h3>v1.2.1</h3>
      <h4>Exclude countries (usa, canada)</h4>
      <ReactPhoneInput
        defaultCountry='no'
        excludeCountries={['us', 'ca']}
      />
      <h4>Only countries</h4>
      <ReactPhoneInput
        defaultCountry='gb'
        onlyCountries={['gb', 'es']}
      />
      <h4>Preferred countries</h4>
      <ReactPhoneInput
        defaultCountry='it'
        preferredCountries={['it', 'se']}
      />
    </div>

    <div style={{ display: 'inline-block' }}>
      <h3>v2.0.0</h3>
      <h4>Auto detect through value field</h4>
      <ReactPhoneInput
        value='+3802343252'
      />
      <h4>Disabled area codes with disableAreaCodes</h4>
      <ReactPhoneInput
        defaultCountry='us'
        disableAreaCodes={true}
      />
      <h4>Disabled flag by default</h4>
      <h4>Customizable placeholder</h4>
      <h4>Customizable styles</h4>
      <ReactPhoneInput
        disableAreaCodes={true}
        placeholder='Type your phone here'
        inputStyle={{
          width: '300px',
          height: '35px',
          fontSize: '13px',
          paddingLeft: '48px',
          borderRadius: '5px'
        }}
        buttonStyle={{ borderRadius: '5px 0 0 5px' }}
        dropdownStyle={{ width: '300px' }}
      />
      <h4>Custom regions selected: {`{'europe'}`}</h4>
      <ReactPhoneInput
        defaultCountry='it'
        regions={'europe'}
      />
      <h4>Custom regions selected: {`{['north-america', 'carribean']}`}</h4>
      <ReactPhoneInput
        defaultCountry='ca'
        regions={['north-america', 'carribean']}
      />
    </div>
  </div>, document.getElementById('root')
);
