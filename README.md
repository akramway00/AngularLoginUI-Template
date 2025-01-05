# Angular Login UI Template

A modern and fully customizable login page interface built with Angular. This project is designed to offer a highly customizable solution for creating user login pages quickly and efficiently. All customizations are centralized in a single file (`app.component.ts`), where you can modify variables to update texts, logos, images, colors, and other UI elements, making it ideal for adaptable use in different applications.


## Features

- **Modern Design**: Sleek and professional UI/UX tailored for a great first impression.
- **Centralized Customization**: Modify all key components (texts, logos, colors, etc.) from a single file (`app.component.ts`).
- **Responsive Layout**: Ensures a great experience across devices and screen sizes.
- **Component-Based Architecture**: Modular design for easy scalability and maintenance.
- **Angular Integration**: Leveraging Angular’s capabilities to deliver dynamic and efficient UI behavior.


## Preview

### Current Design
![Login Page Preview](https://your-image-link-here.com)

### Example of Customization
![Custom Design Preview](https://your-image-link-here.com)


## Getting Started

### Prerequisites

- Node.js (v14 or above)
- Angular CLI (v12 or above)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/angular-dynamic-login-ui.git
   ```

2. Navigate to the project directory:
   ```bash
   cd angular-dynamic-login-ui
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   ng serve
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```


## How to Customize

1. **Text Customization**:
   - Update the `loginMessage`, `subMessage`, and placeholders in the `app.component.ts` file.

2. **Logo and Images**:
   - Replace the `websiteLogo` and other image paths directly in the `app.component.ts` file.

3. **Colors**:
   - Edit the color variables such as `leftSectionColor`, `rightSectionColor`, and `LogButtonColor` in the `app.component.ts` file.

4. **Icons and Buttons**:
   - Modify the `iconSrc`, `textButton`, or `IconMaterialName` variables in `app.component.ts` to update button and input component icons.


## Project Structure

```
angular-login-ui-template/
├── loginPage/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── login-button/
│   │   │   │   ├── input-component/
│   │   │   │   └── ...
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   └── app.component.ts
│   └── assets/
│       ├── phoneImage.png
│       └── ...
└── README.md
```


## Technologies Used

- **Frontend**: Angular, HTML, CSS
- **Fonts**: Kumbh Sans, Open Sans, Material Icons
- **Tools**: Angular CLI, Node.js

## License

This project is licensed under the MIT License.

## Author

Developed by Akramway00






