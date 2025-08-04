# AustroByte Date Picker - Demo

Welcome to the demo page for AustroByte Date Picker!

## 🚀 Live Demo

This page showcases the features and capabilities of the AustroByte Date Picker component.

## 📦 Installation

```bash
npm install austro-byte-datepicker
```

## 📚 Documentation

For complete documentation, examples, and API reference, please visit:

- **GitHub Repository**: https://github.com/mostafahosseinidb/ReactDatePicker
- **npm Package**: https://www.npmjs.com/package/austro-byte-datepicker

## ✨ Features

- 🗓️ Multiple Date Pickers (Single date, date range, date-time)
- 🎨 Highly Customizable with extensive theming options
- ♿ Accessibility First with full ARIA support
- 📱 Mobile Responsive design
- 🚀 Performance Optimized with React hooks
- 🕐 Time Selection with 12/24-hour formats
- 🌍 Internationalization support

## 🛠️ Quick Start

```jsx
import React, { useState } from 'react';
import { Calendar, DateRangePicker } from 'austro-byte-datepicker';
import 'austro-byte-datepicker/dist/styles.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  return (
    <Calendar
      date={selectedDate}
      onChange={setSelectedDate}
    />
  );
}
```

---

Built with ❤️ by [Mostafa Hosseini](https://github.com/mostafahosseinidb) 