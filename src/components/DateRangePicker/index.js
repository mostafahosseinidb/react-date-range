import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePopper } from 'react-popper';
import DateRange from '../DateRange';
import DefinedRange from '../DefinedRange';
import { findNextRangeIndex, generateStyles } from '../../utils';
import classnames from 'classnames';
import coreStyles from '../../styles';

function DateRangePicker(props) {
  // Initial state from props
  const initialRanges = props.ranges || [
    { startDate: new Date(), endDate: new Date(), key: 'selection' },
  ];

  const [focusedRange, setFocusedRange] = useState([findNextRangeIndex(initialRanges), 0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDateText, setSelectedDateText] = useState('');
  const [ranges, setRanges] = useState(initialRanges);

  const styles = generateStyles([coreStyles, props.classNames]);

  const containerRef = useRef(null);
  const dateRangeRef = useRef(null);

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const { styles: popperStyles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'flip',
        enabled: true,
        options: { fallbackPlacements: ['bottom-end', 'top-start', 'top-end'] },
      },
      { name: 'preventOverflow', enabled: true },
    ],
  });

  // Update selected date text based on the current range
  const updateSelectedDateText = range => {
    const { startDate, endDate } = range;
    if (startDate && endDate) {
      const text = `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
      setSelectedDateText(text);
    } else {
      setSelectedDateText('');
    }
  };

  // Initialize selectedDateText once on mount
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    updateSelectedDateText(ranges[0]);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // If props.ranges changes, update local state and selectedDateText
  useEffect(() => {
    setRanges(props.ranges);
    if (props.ranges && props.ranges.length > 0) {
      updateSelectedDateText(props.ranges[0]);
    } else {
      setSelectedDateText('');
    }
  }, [props.ranges]);

  const handleClickOutside = event => {
    if (showDropdown && containerRef.current && !containerRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  // const handleRangeChange = range => {
  //   const selectionKey = Object.keys(range)[0];
  //   const updatedRange = range[selectionKey];
  //   setRanges([updatedRange]);
  //   updateSelectedDateText(updatedRange);
  // };

  const handleRangeChange = range => {
    const selectionKey = Object.keys(range)[0];
    const updatedRange = range[selectionKey];

    // Update the local state
    setRanges([updatedRange]);
    updateSelectedDateText(updatedRange);

    // Call parent onChange callback if provided
    if (props.onChange) {
      props.onChange(range);
    }
  };
  const handleApply = () => {
    setShowDropdown(false);
  };

  const handleCancel = () => {
    setRanges([{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
    setSelectedDateText('');
    setShowDropdown(false);
  };

  const { className, inputClassName } = props;

  return (
    <div
      className={classnames(styles.dateRangePickerOuterWrapper, className)}
      style={{ position: 'relative' }}
      ref={containerRef}>
      <div>
        <input
          ref={setReferenceElement}
          type="text"
          className={classnames('date-picker-input', inputClassName)}
          placeholder="Select a date range"
          value={selectedDateText}
          onClick={toggleDropdown}
          readOnly
        />
      </div>

      {showDropdown && (
        <div
          ref={setPopperElement}
          className={classnames(styles.dateRangePickerWrapper)}
          style={{
            ...popperStyles.popper,
            background: '#fff',
            border: '1px solid #ccc',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            padding: '10px',
            marginTop: '5px',
            zIndex: 9999,
          }}
          {...attributes.popper}>
          <div>
            <DefinedRange
              focusedRange={focusedRange}
              onPreviewChange={value =>
                dateRangeRef.current?.updatePreview(
                  value
                    ? dateRangeRef.current.calcNewSelection(value, typeof value === 'string')
                    : null
                )
              }
              {...props}
              ranges={ranges}
              onChange={handleRangeChange}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-center',
                gap: '10px',
                marginTop: '10px',
              }}>
              <button
                onClick={handleCancel}
                className={classnames('date-picker-button')}
                style={{ background: 'red' }}>
                Cancel
              </button>
              <button onClick={handleApply} className={classnames('date-picker-button')}>
                Apply
              </button>
            </div>
          </div>
          <DateRange
            onRangeFocusChange={setFocusedRange}
            focusedRange={focusedRange}
            {...props}
            ranges={ranges}
            ref={t => (dateRangeRef.current = t)}
            onChange={handleRangeChange}
          />
        </div>
      )}
    </div>
  );
}

DateRangePicker.defaultProps = {
  inputClassName: '',
};

DateRangePicker.propTypes = {
  ...DateRange.propTypes,
  ...DefinedRange.propTypes,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
};

export default DateRangePicker;
