# Contributing to DevSecOps Pipeline

We love your input! We want to make contributing to this DevSecOps pipeline as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## 🤝 We Develop with GitHub

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## 📝 We Use [GitHub Flow](https://guides.github.com/introduction/flow/index.html)

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Ensure all security scans pass.
7. Issue that pull request!

## 🔒 Security Requirements

### For All Contributions

1. **Security Scanning**: All code must pass security scans
2. **No Secrets**: Never commit API keys, passwords, or sensitive data
3. **Dependency Security**: All dependencies must pass vulnerability scans
4. **Code Signing**: Commits should be signed (recommended)

### Security Review Process

1. **Automated Scanning**: All PRs trigger security scans automatically
2. **Manual Review**: Security-sensitive changes require manual review
3. **Approval Required**: Security team approval needed for security-related changes

## 🧪 Testing Requirements

### Test Coverage
- Minimum 80% code coverage required
- All new features must include tests
- Security-related code requires comprehensive testing

### Types of Tests
- **Unit Tests**: Test individual components
- **Integration Tests**: Test component interactions
- **Security Tests**: Test security controls and validations
- **Performance Tests**: Ensure performance standards are met

### Running Tests Locally

```bash
# Install dependencies
npm install  # or pip install -r requirements.txt

# Run unit tests
npm test     # or pytest

# Run security tests
npm run security-test  # or python -m pytest security/

# Check code coverage
npm run coverage       # or pytest --cov=.
```

## 🎨 Code Style

### General Guidelines
- Follow language-specific style guides
- Use meaningful variable and function names
- Write clear, concise comments
- Keep functions small and focused

### JavaScript/TypeScript
- Use ESLint configuration provided
- Follow Airbnb style guide
- Use Prettier for formatting

### Python
- Follow PEP 8 style guide
- Use Black for formatting
- Use type hints where appropriate

### Example Code Format

```javascript
// Good ✅
function validateUserInput(input) {
  if (!input || typeof input !== 'string') {
    throw new Error('Invalid input: expected non-empty string');
  }
  
  // Sanitize input to prevent XSS
  return input.replace(/[<>]/g, '');
}

// Bad ❌
function validate(x) {
  return x.replace(/[<>]/g, '');
}
```

## 📋 Pull Request Process

### 1. Pre-PR Checklist
- [ ] Code follows style guidelines
- [ ] All tests pass locally
- [ ] Security scans pass locally
- [ ] Documentation is updated
- [ ] Self-review completed

### 2. PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Security improvement
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Security tests added/updated
- [ ] Manual testing completed

## Security Considerations
- [ ] No sensitive data exposed
- [ ] Input validation implemented
- [ ] Authentication/authorization considered
- [ ] Security scan results reviewed

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

### 3. Review Process
1. **Automated Checks**: All CI/CD checks must pass
2. **Peer Review**: At least one code review required
3. **Security Review**: Required for security-sensitive changes
4. **Maintainer Approval**: Final approval from maintainer

## 🐛 Report Bugs Using GitHub Issues

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/SudhanshuYadav174/automated-devops-code-quality/issues/new).

### Bug Report Template

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

### Security Bug Reports

**⚠️ IMPORTANT**: Do not report security vulnerabilities through public GitHub issues.

For security vulnerabilities:
1. Email security@example.com
2. Include detailed description and reproduction steps
3. Allow time for investigation before public disclosure
4. Follow our [Security Policy](SECURITY.md)

## 🚀 Feature Requests

We track feature requests through GitHub issues. Create a feature request by [opening a new issue](https://github.com/SudhanshuYadav174/automated-devops-code-quality/issues/new) with the "feature request" template.

### Feature Request Guidelines
- Clearly describe the feature
- Explain the use case and benefits
- Consider backward compatibility
- Think about security implications
- Provide implementation suggestions if possible

## 🏗️ Development Environment Setup

### Prerequisites
- Node.js 18+ (for JavaScript projects)
- Python 3.8+ (for Python projects)
- Docker (for container testing)
- Git with GPG signing configured

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/SudhanshuYadav174/automated-devops-code-quality.git
   cd automated-devops-code-quality
   ```

2. **Install dependencies**
   ```bash
   # For Node.js projects
   npm install
   
   # For Python projects
   pip install -r requirements.txt
   pip install -r requirements-dev.txt
   ```

3. **Set up pre-commit hooks**
   ```bash
   npm run setup-hooks  # or pre-commit install
   ```

4. **Configure IDE**
   - Install recommended extensions
   - Enable format on save
   - Configure security linting

### Development Workflow

1. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes**
   - Write code following style guidelines
   - Add/update tests
   - Update documentation

3. **Test locally**
   ```bash
   npm test              # Run tests
   npm run lint          # Check code style
   npm run security      # Run security checks
   ```

4. **Commit changes**
   ```bash
   git add .
   git commit -S -m "feat: add new security feature"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## 📚 Documentation Guidelines

### Types of Documentation
- **Code Comments**: Explain complex logic and security considerations
- **API Documentation**: Document all public APIs
- **User Guides**: How-to guides for using features
- **Architecture Docs**: High-level system design

### Documentation Standards
- Write in clear, simple language
- Include examples and code snippets
- Keep documentation up to date with code changes
- Use markdown for formatting

### Security Documentation
- Document security controls and their purpose
- Explain threat models and mitigations
- Include security configuration examples
- Provide troubleshooting guides

## 🏆 Recognition

Contributors who make significant improvements to the project will be:
- Listed in the CONTRIBUTORS.md file
- Mentioned in release notes
- Considered for maintainer status

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

## 📞 Getting Help

- **General Questions**: Open a GitHub discussion
- **Bug Reports**: Create a GitHub issue
- **Security Issues**: Email security@example.com
- **Chat**: Join our community chat (link in README)

## 🤔 Questions?

Don't hesitate to ask questions! You can:
- Open a discussion
- Create an issue
- Reach out to maintainers

---

**Thank you for contributing to making software more secure! 🛡️**