
# 🧮 Calculator App

A simple calculator application built to perform basic arithmetic operations. This project is designed as a demonstration of clean coding practices, modular programming, and optional CI/CD integration.

## 🚀 Features

- Basic operations: Addition, Subtraction, Multiplication, Division
- Clean and modular code
- Command-line interface (CLI)
- Unit tests for core functionality
- Easy to extend with additional features

## 📁 Project Structure

```
Calculator/
├── src/               # Source code
│   ├── main.py        # Main application entry point
│   └── calculator.py  # Core logic for operations
├── tests/             # Unit tests
│   └── test_calc.py   # Test cases for calculator functions
├── requirements.txt   # List of dependencies (Python)
├── README.md          # Project documentation
└── .gitignore         # Files/folders to ignore in git
```

> Modify the structure based on your actual files.

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.ibm.com/Guru-Vishnu-S/Calculator.git
cd Calculator
```

### 2. Set Up the Environment

#### If using Python:

```bash
pip install -r requirements.txt
```

#### If using Java:

```bash
mvn install
```

## ▶️ Usage

### Python (CLI)

```bash
python src/main.py
```

Follow the prompts to perform calculations.

### Java (Jar)

```bash
java -jar target/calculator.jar
```

## ✅ Running Tests

#### Python

```bash
pytest tests/
```

#### Java

```bash
mvn test
```

## ⚙️ CI/CD Integration (Optional)

You can set up automated workflows to:

- Lint code
- Run tests
- Build and package
- Deploy to environments like OpenShift

Example: `.github/workflows/python.yml` for GitHub Actions or `Jenkinsfile` for Jenkins.

## 📌 TODOs

- [ ] Add GUI support using Tkinter or JavaFX
- [ ] Add scientific operations (square root, power, etc.)
- [ ] Containerize using Docker
- [ ] Deploy on OpenShift

## 🙌 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request
