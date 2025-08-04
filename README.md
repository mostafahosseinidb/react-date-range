# AustroByte Date Picker

[![npm](https://img.shields.io/npm/v/austroByteDatepicker)](https://www.npmjs.com/package/austroByteDatepicker)
[![npm](https://img.shields.io/npm/l/austroByteDatepicker)]()
[![npm](https://img.shields.io/npm/dw/austroByteDatepicker)](https://www.npmjs.com/package/austroByteDatepicker)

A modern, feature-rich React component library for date and time selection. Built with TypeScript, powered by date-fns, and designed for excellent user experience.

## ✨ Features

- 🗓️ **Multiple Date Pickers**: Single date, date range, and date-time pickers
- 🎨 **Highly Customizable**: Extensive theming and styling options
- ♿ **Accessibility First**: Full ARIA support and keyboard navigation
- 📱 **Mobile Responsive**: Works seamlessly on all devices
- 🚀 **Performance Optimized**: Built with React hooks and memoization
- 🎯 **TypeScript Ready**: Full TypeScript support
- 🕐 **Time Selection**: 12-hour and 24-hour format support
- 🎪 **Drag & Drop**: Intuitive date range selection
- 🌍 **Internationalization**: Multi-language support via date-fns locales

## 📦 Installation

```bash
npm install austroByteDatepicker
```

### Peer Dependencies

This package requires React and date-fns as peer dependencies:

```bash
npm install react date-fns
```

## 🚀 Quick Start

### 1. Import Styles

```javascript
import 'austroByteDatepicker/dist/styles.css';
import 'austroByteDatepicker/dist/theme/default.css';
```

### 2. Basic Usage

```jsx
import React, { useState } from 'react';
import { Calendar, DateRangePicker, DateTimePicker } from 'austroByteDatepicker';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  return (
    <div>
      {/* Single Date Picker */}
      <Calendar
        date={selectedDate}
        onChange={setSelectedDate}
      />

      {/* Date Range Picker */}
      <DateRangePicker
        ranges={[dateRange]}
        onChange={setDateRange}
      />

      {/* DateTime Picker */}
      <DateTimePicker
        date={selectedDateTime}
        onChange={setSelectedDateTime}
      />
    </div>
  );
}
```

## 🎨 Custom Input Support

All picker components now support custom input elements, allowing you to completely customize the appearance and behavior of the input field.

### Using Custom Inputs

```jsx
import React from 'react';
import { DateRangePicker } from 'austroByteDatepicker';

function App() {
  // Define your custom input element
  const customInput = (
    <div
      style={{
        padding: '16px 20px',
        border: '2px solid #e74c3c',
        borderRadius: '8px',
        backgroundColor: '#fdf2f2',
        color: '#c0392b',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <span>📅 Select Date Range</span>
      <span>🗓️</span>
    </div>
  );

  return (
    <DateRangePicker
      ranges={[dateRange]}
      onChange={setDateRange}
      customInput={customInput}
    />
  );
}
```

### Custom Input Features

- **Automatic Props**: The component automatically handles all necessary props (ref, onClick, onKeyDown, etc.)
- **Value Management**: Your custom input receives the selected value and placeholder
- **Accessibility**: All ARIA attributes and keyboard navigation are preserved
- **Flexible Styling**: Complete control over appearance and layout
- **Icon Support**: Include your own icons or styling elements

### Available Components with Custom Input Support

- `Calendar` - Single date picker
- `DateRangePicker` - Date range picker  
- `DateTimePicker` - Date and time picker

## 📚 Component Examples

### Single Date Picker (Calendar)

```jsx
import { Calendar } from 'austroByteDatepicker';

function CalendarExample() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Calendar
      date={selectedDate}
      onChange={setSelectedDate}
      color="#3d91ff"
      showMonthAndYearPickers={true}
      showMonthArrow={true}
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2030, 11, 31)}
      disabledDates={[
        new Date(2024, 0, 1), // New Year's Day
        new Date(2024, 6, 4), // Independence Day
      ]}
      disabledDay={date => {
        // Disable weekends
        const day = date.getDay();
        return day === 0 || day === 6;
      }}
    />
  );
}
```

### Date Range Picker

```jsx
import { DateRangePicker } from 'austroByteDatepicker';

function DateRangeExample() {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  return (
    <DateRangePicker
      ranges={[dateRange]}
      onChange={(ranges) => setDateRange(ranges.selection)}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      months={2} // Show 2 months side by side (default: 2)
      direction="horizontal"
      rangeColors={['#3d91ff']}
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2030, 11, 31)}
      placeholder="Select date range"
    />
  );
}
```

### Date Time Picker

```jsx
import { DateTimePicker } from 'austroByteDatepicker';

function DateTimeExample() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  return (
    <div>
      {/* 12-Hour Format */}
      <DateTimePicker
        date={selectedDateTime}
        onChange={setSelectedDateTime}
        placeholder="Select date and time (12-hour)"
        hour12={true}
        color="#3d91ff"
      />

      {/* 24-Hour Format */}
      <DateTimePicker
        date={selectedDateTime}
        onChange={setSelectedDateTime}
        placeholder="Select date and time (24-hour)"
        hour12={false}
        color="#ff6b6b"
      />

      {/* Date Only (No Time Selection) */}
      <DateTimePicker
        date={selectedDateTime}
        onChange={setSelectedDateTime}
        placeholder="Select date only"
        showTime={false}
        color="#28a745"
      />

      {/* With Date Restrictions */}
      <DateTimePicker
        date={selectedDateTime}
        onChange={setSelectedDateTime}
        minDate={new Date(2024, 0, 1)}
        maxDate={new Date(2024, 11, 31)}
        disabledDates={[
          new Date(2024, 0, 1),
          new Date(2024, 6, 4),
        ]}
        disabledDay={date => {
          const day = date.getDay();
          return day === 0 || day === 6;
        }}
      />
    </div>
  );
}
```

**Features:**
- **Today Button**: Quick access to set current date and time
- **Time Selection**: Optional time picker with 12/24-hour format support
- **Date Only Mode**: Can be configured to show only date selection
- **Custom Input Support**: Use your own input elements

### Custom Styling

```jsx
// Custom CSS
const customStyles = `
  .custom-date-picker {
    border: 2px solid #ff6b6b;
    border-radius: 8px;
  }

  .custom-input {
    background-color: #fff5f5;
    border: 1px solid #ff6b6b;
    border-radius: 4px;
    padding: 10px 12px;
    font-size: 14px;
  }

  .custom-input:focus {
    outline: none;
    border-color: #ff6b6b;
    box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.2);
  }
`;

function CustomStyledExample() {
  return (
    <div>
      <style>{customStyles}</style>
      
      <DateRangePicker
        ranges={[dateRange]}
        onChange={handleRangeChange}
        className="custom-date-picker"
        inputClassName="custom-input"
        placeholder="Custom styled picker"
      />

      <DateTimePicker
        date={selectedDateTime}
        onChange={setSelectedDateTime}
        className="custom-date-picker"
        inputClassName="custom-input"
        placeholder="Custom styled date time picker"
      />
    </div>
  );
}
```

## ⚙️ Configuration Options

### Common Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Wrapper CSS class name |
| `color` | `string` | `#3d91ff` | Primary color for selections |
| `minDate` | `Date` | - | Minimum selectable date |
| `maxDate` | `Date` | - | Maximum selectable date |
| `disabledDates` | `Date[]` | `[]` | Array of disabled dates |
| `disabledDay` | `function` | - | Function to disable specific days |
| `locale` | `object` | `enUS` | Date-fns locale object |

### Calendar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `date` | `Date` | - | Selected date value |
| `onChange` | `function` | - | Date change callback |
| `showMonthAndYearPickers` | `boolean` | `true` | Show month/year selectors |
| `showMonthArrow` | `boolean` | `true` | Show month navigation arrows |
| `dragSelectionEnabled` | `boolean` | `true` | Enable drag selection |
| `customInput` | `element` | - | Custom input element to use instead of default |

### DateRangePicker Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ranges` | `array` | `[]` | Array of range objects |
| `onChange` | `function` | - | Range change callback |
| `showSelectionPreview` | `boolean` | `true` | Show selection preview |
| `moveRangeOnFirstSelection` | `boolean` | `false` | Move range on first selection |
| `months` | `number` | `2` | Number of months to display side by side |
| `direction` | `string` | `'horizontal'` | `'vertical'` or `'horizontal'` |
| `rangeColors` | `array` | - | Colors for range selections |
| `placeholder` | `string` | - | Input placeholder text |
| `customInput` | `element` | - | Custom input element to use instead of default |

### DateTimePicker Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `date` | `Date` | - | Selected date and time |
| `onChange` | `function` | - | Date/time change callback |
| `hour12` | `boolean` | `true` | Use 12-hour format |
| `showTime` | `boolean` | `true` | Show time selection (false = date only) |
| `placeholder` | `string` | - | Input placeholder text |
| `inputClassName` | `string` | - | Input CSS class name |
| `customInput` | `element` | - | Custom input element to use instead of default |

## 🎨 Theming