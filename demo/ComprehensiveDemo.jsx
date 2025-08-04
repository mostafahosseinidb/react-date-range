import React, { useState, useCallback } from 'react';
import { Calendar, DateRangePicker, DateTimePicker } from '../src';

const ComprehensiveDemo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  const handleDateChange = useCallback(date => {
    setSelectedDate(date);
  }, []);

  const handleRangeChange = useCallback(range => {
    const selectionKey = Object.keys(range)[0];
    setDateRange(range[selectionKey]);
  }, []);

  const handleDateTimeChange = useCallback(date => {
    setSelectedDateTime(date);
  }, []);

  // Custom input elements for demonstration
  const customDateInput = (
    <input
      type="text"
      style={{
        width: '100%',
        padding: '16px 20px',
        border: '2px solid #e74c3c',
        borderRadius: '8px',
        fontSize: '18px',
        backgroundColor: '#fdf2f2',
        color: '#c0392b',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
      placeholder="Custom Date Input"
    />
  );

  const customRangeInput = (
    <div
      style={{
        width: '100%',
        padding: '16px 20px',
        border: '2px solid #3498db',
        borderRadius: '8px',
        backgroundColor: '#f0f8ff',
        color: '#2980b9',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <span>📅 Custom Range Input</span>
      <span style={{ fontSize: '20px' }}>🗓️</span>
    </div>
  );

  const customDateTimeInput = (
    <div
      style={{
        width: '100%',
        padding: '16px 20px',
        border: '2px solid #9b59b6',
        borderRadius: '8px',
        backgroundColor: '#f8f4ff',
        color: '#8e44ad',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <span>🕐 Custom DateTime Input</span>
      <span style={{ fontSize: '20px' }}>⏰</span>
    </div>
  );

  const customStyles = `
    .custom-date-picker {
      border: 2px solid #ff6b6b;
      border-radius: 8px;
    }
    .custom-range-picker {
      border: 2px solid #4ecdc4;
      border-radius: 8px;
    }
    .custom-datetime-picker {
      border: 2px solid #45b7d1;
      border-radius: 8px;
    }
    .demo-section {
      margin-bottom: 40px;
      padding: 20px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background: #fafafa;
    }
    .feature-list {
      background: #e8f5e8;
      padding: 15px;
      border-radius: 6px;
      margin: 15px 0;
    }
    .feature-list h4 {
      margin-top: 0;
      color: #2e7d32;
    }
    .feature-list ul {
      margin: 10px 0;
      padding-left: 20px;
    }
    .feature-list li {
      margin: 5px 0;
      color: #1b5e20;
    }
    .demo-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      align-items: start;
    }
    .component-demo {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .code-box {
      background: #2d3748;
      color: #e2e8f0;
      padding: 20px;
      border-radius: 8px;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: 13px;
      line-height: 1.5;
      overflow-x: auto;
      max-height: 400px;
      overflow-y: auto;
    }
    .code-box .keyword {
      color: #ff79c6;
    }
    .code-box .string {
      color: #f1fa8c;
    }
    .code-box .comment {
      color: #6272a4;
    }
    .code-box .prop {
      color: #50fa7b;
    }
    .code-box .value {
      color: #8be9fd;
    }
    @media (max-width: 768px) {
      .demo-container {
        grid-template-columns: 1fr;
      }
    }
  `;

  const renderCodeBox = (title, code, props) => (
    <div className="code-box">
      <div style={{ color: '#ff79c6', marginBottom: '10px', fontWeight: 'bold' }}>{title}</div>
      <div style={{ color: '#6272a4', marginBottom: '15px' }}>
        {/* Component Usage: */}
        Component Usage:
      </div>
      <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
        <code>{code}</code>
      </pre>
      {props && (
        <>
          <div style={{ color: '#6272a4', marginTop: '15px', marginBottom: '10px' }}>
            {/* Props being passed: */}
            Props being passed:
          </div>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
            <code>{props}</code>
          </pre>
        </>
      )}
    </div>
  );

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
      <style>{customStyles}</style>

      <h1 style={{ color: '#2c3e50', textAlign: 'center', marginBottom: '30px' }}>
        🗓️ React Date Range Picker - Comprehensive Demo
      </h1>

      <div className="feature-list">
        <h4>✨ New Features Added:</h4>
        <ul>
          <li>
            <strong>Larger Icons & Text:</strong> All components now have larger, more visible icons
            and text
          </li>
          <li>
            <strong>Custom Input Support:</strong> Users can now provide their own custom input
            elements
          </li>
          <li>
            <strong>Flexible Styling:</strong> Complete control over input appearance and behavior
          </li>
          <li>
            <strong>Enhanced UX:</strong> Better visual hierarchy and improved accessibility
          </li>
        </ul>
      </div>

      <div className="demo-section">
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>📅 Default Date Picker</h2>
        <p style={{ marginBottom: '15px', color: '#666' }}>
          Standard date picker with improved larger text and icon size.
        </p>
        <div className="demo-container">
          <div className="component-demo">
            <Calendar
              date={selectedDate}
              onChange={handleDateChange}
              className="custom-date-picker"
            />
            <p style={{ marginTop: '10px', fontSize: '14px', color: '#888' }}>
              Selected: {selectedDate.toLocaleDateString()}
            </p>
          </div>
          {renderCodeBox(
            'Calendar Component',
            `<Calendar
  date={selectedDate}
  onChange={handleDateChange}
  className="custom-date-picker"
/>`,
            `{
  date: ${selectedDate.toLocaleDateString()},
  onChange: handleDateChange,
  className: "custom-date-picker"
}`
          )}
        </div>
      </div>

      <div className="demo-section">
        <h2 style={{ color: '#3498db', marginBottom: '20px' }}>
          📅 Default Date Range Picker (2 Months)
        </h2>
        <p style={{ marginBottom: '15px', color: '#666' }}>
          Standard date range picker with enhanced visual elements. Now displays 2 months side by side by
          default.
        </p>
        <div className="demo-container">
          <div className="component-demo">
            <DateRangePicker ranges={[dateRange]} onChange={handleRangeChange} />
            <p style={{ marginTop: '10px', fontSize: '14px', color: '#888' }}>
              Selected: {dateRange.startDate.toLocaleDateString()} -{' '}
              {dateRange.endDate.toLocaleDateString()}
            </p>
          </div>
          {renderCodeBox(
            'DateRangePicker Component',
            `<DateRangePicker
  ranges={[dateRange]}
  onChange={handleRangeChange}
/>`,
            `{
  ranges: [{
    startDate: ${dateRange.startDate.toLocaleDateString()},
    endDate: ${dateRange.endDate.toLocaleDateString()}
  }],
  onChange: handleRangeChange,
  months: 2 (default)
}`
          )}
        </div>
      </div>

      <div className="demo-section">
        <h2 style={{ color: '#e74c3c', marginBottom: '20px' }}>📅 Date Range Picker (3 Months)</h2>
        <p style={{ marginBottom: '15px', color: '#666' }}>
          Date range picker configured to show 3 months side by side.
        </p>
        <div className="demo-container">
          <div className="component-demo">
            <DateRangePicker ranges={[dateRange]} onChange={handleRangeChange} months={3} />
            <p style={{ marginTop: '10px', fontSize: '14px', color: '#888' }}>
              Selected: {dateRange.startDate.toLocaleDateString()} -{' '}
              {dateRange.endDate.toLocaleDateString()}
            </p>
          </div>
          {renderCodeBox(
            'DateRangePicker Component (3 Months)',
            `<DateRangePicker
  ranges={[dateRange]}
  onChange={handleRangeChange}
  months={3}
/>`,
            `{
  ranges: [{
    startDate: ${dateRange.startDate.toLocaleDateString()},
    endDate: ${dateRange.endDate.toLocaleDateString()}
  }],
  onChange: handleRangeChange,
  months: 3
}`
          )}
        </div>
      </div>

      <div className="demo-section">
        <h2 style={{ color: '#9b59b6', marginBottom: '20px' }}>🕐 Default DateTime Picker</h2>
        <p style={{ marginBottom: '15px', color: '#666' }}>
          Standard date-time picker with larger, more accessible elements. Now includes a &quot;Today&quot; button for quick date
          selection.
        </p>
        <div className="demo-container">
          <div className="component-demo">
            <DateTimePicker date={selectedDateTime} onChange={handleDateTimeChange} />
            <p style={{ marginTop: '10px', fontSize: '14px', color: '#888' }}>
              Selected: {selectedDateTime.toLocaleString()}
            </p>
          </div>
          {renderCodeBox(
            'DateTimePicker Component',
            `<DateTimePicker
  date={selectedDateTime}
  onChange={handleDateTimeChange}
/>`,
            `{
  date: ${selectedDateTime.toLocaleString()},
  onChange: handleDateTimeChange
}`
          )}
        </div>
      </div>

      <div className="demo-section">
        <h2 style={{ color: '#9b59b6', marginBottom: '20px' }}>📅 DateTime Picker (Date Only)</h2>
        <p style={{ marginBottom: '15px', color: '#666' }}>
          DateTime picker with time selection disabled - shows only date picker.
        </p>
        <div className="demo-container">
          <div className="component-demo">
            <DateTimePicker
              date={selectedDateTime}
              onChange={handleDateTimeChange}
              showTime={false}
            />
            <p style={{ marginTop: '10px', fontSize: '14px', color: '#888' }}>
              Selected: {selectedDateTime.toLocaleDateString()}
            </p>
          </div>
          {renderCodeBox(
            'DateTimePicker (Date Only)',
            `<DateTimePicker
  date={selectedDateTime}
  onChange={handleDateTimeChange}
  showTime={false}
/>`,
            `{
  date: ${selectedDateTime.toLocaleDateString()},
  onChange: handleDateTimeChange,
  showTime: false
}`
          )}
        </div>
      </div>

      <div className="demo-section">
        <h2 style={{ color: '#e74c3c', marginBottom: '20px' }}>🎨 Custom Date Picker Input</h2>
        <p style={{ marginBottom: '15px', color: '#666' }}>
          Using a custom input element with unique styling and behavior.
        </p>
        <div className="demo-container">
          <div className="component-demo">
            <Calendar
              date={selectedDate}
              onChange={handleDateChange}
              customInput={customDateInput}
            />
            <p style={{ marginTop: '10px', fontSize: '14px', color: '#888' }}>
              Selected: {selectedDate.toLocaleDateString()}
            </p>
          </div>
          {renderCodeBox(
            'Calendar with Custom Input',
            `const customDateInput = (
  <input
    type="text"
    style={{
      width: '100%',
      padding: '16px 20px',
      border: '2px solid #e74c3c',
      borderRadius: '8px',
      fontSize: '18px',
      backgroundColor: '#fdf2f2',
      color: '#c0392b',
      fontWeight: 'bold',
      cursor: 'pointer',
    }}
    placeholder="Custom Date Input"
  />
);

<Calendar
  date={selectedDate}
  onChange={handleDateChange}
  customInput={customDateInput}
/>`,
            `{
  date: ${selectedDate.toLocaleDateString()},
  onChange: handleDateChange,
  customInput: customDateInput
}`
          )}
        </div>
      </div>

      <div className="demo-section">
        <h2 style={{ color: '#3498db', marginBottom: '20px' }}>
          🎨 Custom Date Range Picker Input
        </h2>
        <p style={{ marginBottom: '15px', color: '#666' }}>
          Custom range input with unique design and emoji icons.
        </p>
        <div className="demo-container">
          <div className="component-demo">
            <DateRangePicker
              ranges={[dateRange]}
              onChange={handleRangeChange}
              customInput={customRangeInput}
            />
            <p style={{ marginTop: '10px', fontSize: '14px', color: '#888' }}>
              Selected: {dateRange.startDate.toLocaleDateString()} -{' '}
              {dateRange.endDate.toLocaleDateString()}
            </p>
          </div>
          {renderCodeBox(
            'DateRangePicker with Custom Input',
            `const customRangeInput = (
  <div style={{
    width: '100%',
    padding: '16px 20px',
    border: '2px solid #3498db',
    borderRadius: '8px',
    backgroundColor: '#f0f8ff',
    color: '#2980b9',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }}>
    <span>📅 Custom Range Input</span>
    <span style={{ fontSize: '20px' }}>🗓️</span>
  </div>
);

<DateRangePicker
  ranges={[dateRange]}
  onChange={handleRangeChange}
  customInput={customRangeInput}
/>`,
            `{
  ranges: [{
    startDate: ${dateRange.startDate.toLocaleDateString()},
    endDate: ${dateRange.endDate.toLocaleDateString()}
  }],
  onChange: handleRangeChange,
  customInput: customRangeInput
}`
          )}
        </div>
      </div>

      <div className="demo-section">
        <h2 style={{ color: '#9b59b6', marginBottom: '20px' }}>🎨 Custom DateTime Picker Input</h2>
        <p style={{ marginBottom: '15px', color: '#666' }}>
          Custom date-time input with unique styling and time icons.
        </p>
        <div className="demo-container">
          <div className="component-demo">
            <DateTimePicker
              date={selectedDateTime}
              onChange={handleDateTimeChange}
              customInput={customDateTimeInput}
            />
            <p style={{ marginTop: '10px', fontSize: '14px', color: '#888' }}>
              Selected: {selectedDateTime.toLocaleString()}
            </p>
          </div>
          {renderCodeBox(
            'DateTimePicker with Custom Input',
            `const customDateTimeInput = (
  <div style={{
    width: '100%',
    padding: '16px 20px',
    border: '2px solid #9b59b6',
    borderRadius: '8px',
    backgroundColor: '#f8f4ff',
    color: '#8e44ad',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }}>
    <span>🕐 Custom DateTime Input</span>
    <span style={{ fontSize: '20px' }}>⏰</span>
  </div>
);

<DateTimePicker
  date={selectedDateTime}
  onChange={handleDateTimeChange}
  customInput={customDateTimeInput}
/>`,
            `{
  date: ${selectedDateTime.toLocaleString()},
  onChange: handleDateTimeChange,
  customInput: customDateTimeInput
}`
          )}
        </div>
      </div>

      <div className="feature-list">
        <h4>🔧 How to Use Custom Inputs:</h4>
        <ul>
          <li>
            Pass a <code>customInput</code> prop with your React element
          </li>
          <li>The component will automatically handle all necessary props and events</li>
          <li>Your custom input will receive the selected value and placeholder</li>
          <li>All accessibility features are preserved</li>
          <li>You can include your own icons or styling</li>
        </ul>
      </div>

      <div
        style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
        }}>
        <h3 style={{ color: '#495057', marginBottom: '15px' }}>💡 Usage Examples:</h3>
        <pre
          style={{
            backgroundColor: '#e9ecef',
            padding: '15px',
            borderRadius: '4px',
            overflow: 'auto',
          }}>
          {`// Custom input with unique styling
const customInput = (
  <input
    style={{
      padding: '16px 20px',
      border: '2px solid #e74c3c',
      borderRadius: '8px',
      fontSize: '18px',
      backgroundColor: '#fdf2f2',
      color: '#c0392b',
      fontWeight: 'bold',
    }}
    placeholder="Custom Date Input"
  />
);

// Use with any picker component
<DateRangePicker
  ranges={[dateRange]}
  onChange={handleRangeChange}
  customInput={customInput}
/>`}
        </pre>
      </div>
    </div>
  );
};

export default ComprehensiveDemo;
