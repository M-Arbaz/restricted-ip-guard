# IP Access Blocker

This is a simple JavaScript-based IP access control script that checks the user's public IP address and blocks access if the IP matches a predefined denylist.

## 🚀 Features

- Fetches the user's IP using [ipify API](https://www.ipify.org/)
- Compares the IP against a list of restricted addresses
- Displays an "Access Denied" message with a support contact link if blocked
- Executes automatically when the page loads

## 📁 Usage

1. Include the script in your HTML file:
    ```html
    <script src="path/to/script.js"></script>
    ```

2. Or paste the script directly in a `<script>` tag inside your HTML page.

## 🔧 Configuration

- Update the `restrictArray` with IP addresses you want to block.
- Change the contact link or message if needed.

```js
const restrictArray = ["51.x.x.x", "154.x.x.x"];
