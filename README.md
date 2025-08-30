# 🛡️ Automated DevSecOps Code Quality Pipeline

[![Security Scanning](https://github.com/SudhanshuYadav174/automated-devops-code-quality/actions/workflows/devsecops-pipeline.yml/badge.svg)](https://github.com/SudhanshuYadav174/automated-devops-code-quality/actions/workflows/devsecops-pipeline.yml)
[![Secret Scanning](https://github.com/SudhanshuYadav174/automated-devops-code-quality/actions/workflows/secret-scanning.yml/badge.svg)](https://github.com/SudhanshuYadav174/automated-devops-code-quality/actions/workflows/secret-scanning.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=SudhanshuYadav174_automated-devops-code-quality&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=SudhanshuYadav174_automated-devops-code-quality)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=SudhanshuYadav174_automated-devops-code-quality&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=SudhanshuYadav174_automated-devops-code-quality)

A comprehensive DevSecOps pipeline implementation that integrates security, quality, and compliance checks throughout the software development lifecycle. This repository demonstrates best practices for automated security scanning, code quality analysis, and supply chain security.

## 🚀 Features

### 🔒 Security
- **Static Application Security Testing (SAST)** with CodeQL and SonarCloud
- **Dynamic Application Security Testing (DAST)** capabilities
- **Dependency vulnerability scanning** with Snyk and OWASP Dependency Check
- **Container security scanning** with Trivy and Dockle
- **Secret detection** with TruffleHog, Gitleaks, and GitGuardian
- **Infrastructure as Code security** with Checkov and tfsec

### 🏗️ Quality Assurance
- **Code quality analysis** with SonarCloud
- **Automated testing** integration
- **Code coverage** tracking and enforcement
- **Technical debt** monitoring
- **Quality gates** with configurable thresholds

### 📦 Supply Chain Security
- **Software Bill of Materials (SBOM)** generation
- **License compliance** checking with FOSSA
- **Dependency provenance** verification
- **Supply chain risk** assessment

### 🔄 Automation
- **Continuous Integration/Continuous Deployment (CI/CD)**
- **Automated security notifications**
- **Policy enforcement**
- **Compliance reporting**

## 🏃‍♂️ Quick Start

### Prerequisites

Before using this pipeline, ensure you have the following secrets configured in your repository:

#### Required Secrets
```bash
SONAR_HOST          # SonarQube/SonarCloud server URL
SONAR_TOKEN         # SonarQube authentication token
SNYK_TOKEN          # Snyk vulnerability scanning API token
DOCKER_USERNAME     # Docker Hub username
DOCKER_PASSWORD     # Docker Hub password/token
FOSSA_API_KEY       # FOSSA license compliance API key
GITGUARDIAN_API_KEY # GitGuardian secret scanning API key
```

#### Optional Secrets (for enhanced functionality)
```bash
SLACK_WEBHOOK_URL   # Slack notifications
JIRA_API_TOKEN      # JIRA integration
DATADOG_API_KEY     # Monitoring integration
```

### Setup Instructions

1. **Fork or clone this repository**
   ```bash
   git clone https://github.com/SudhanshuYadav174/automated-devops-code-quality.git
   cd automated-devops-code-quality
   ```

2. **Configure repository secrets**
   - Go to your repository Settings → Secrets and variables → Actions
   - Add all required secrets listed above

3. **Enable GitHub Security Features**
   - Go to Settings → Security → Code scanning alerts
   - Enable Dependabot alerts and security updates
   - Configure secret scanning

4. **Customize configuration files**
   - Update `sonar-project.properties` with your project details
   - Modify `.snyk` for your specific vulnerability policies
   - Adjust `trivy.yaml` for your scanning preferences

5. **Trigger the pipeline**
   - Push code to any branch or create a pull request
   - The pipeline will automatically execute

## 📋 Pipeline Stages

### 1. Code Quality & Security Analysis
- **Duration**: ~5-10 minutes
- **Tools**: SonarCloud, ESLint, Black, Flake8
- **Outputs**: Quality metrics, security hotspots, code coverage

### 2. Security Vulnerability Scanning
- **Duration**: ~8-15 minutes  
- **Tools**: Snyk, CodeQL, Trivy
- **Outputs**: Vulnerability reports, SARIF files, security alerts

### 3. Secret & Credential Detection
- **Duration**: ~3-5 minutes
- **Tools**: TruffleHog, Gitleaks, GitGuardian
- **Outputs**: Secret detection reports, credential validation

### 4. Container Security (if Dockerfile present)
- **Duration**: ~10-20 minutes
- **Tools**: Trivy, Dockle, Docker Scout
- **Outputs**: Container vulnerability reports, image security analysis

### 5. Supply Chain Security
- **Duration**: ~5-10 minutes
- **Tools**: Anchore Syft, Grype, FOSSA
- **Outputs**: SBOM, license compliance reports

### 6. Infrastructure Security (if IaC present)
- **Duration**: ~5-8 minutes
- **Tools**: Checkov, tfsec, Kubesec
- **Outputs**: Infrastructure security reports, policy violations

## 🎯 Quality Gates

The pipeline enforces several quality gates that must pass before deployment:

### Security Gates
- ✅ No critical security vulnerabilities
- ✅ No exposed secrets or credentials
- ✅ Security rating ≥ A (SonarCloud)
- ✅ Container images pass security scan

### Quality Gates
- ✅ Code coverage ≥ 80%
- ✅ Maintainability rating ≥ A
- ✅ Reliability rating ≥ A
- ✅ No critical code smells

### Compliance Gates
- ✅ License compliance verified
- ✅ SBOM generated and validated
- ✅ Supply chain security requirements met

## 📊 Monitoring & Reporting

### Security Metrics
- **Mean Time to Detection (MTTD)**: How quickly vulnerabilities are found
- **Mean Time to Resolution (MTTR)**: How quickly issues are fixed
- **Vulnerability Density**: Number of vulnerabilities per lines of code
- **Security Test Coverage**: Percentage of code covered by security tests

### Quality Metrics
- **Code Coverage**: Percentage of code covered by tests
- **Technical Debt**: Time needed to fix code quality issues
- **Cyclomatic Complexity**: Code complexity measurement
- **Duplication**: Percentage of duplicated code

### Compliance Metrics
- **Policy Compliance**: Adherence to security and quality policies
- **License Compliance**: Open source license compliance status
- **Audit Trail**: Complete history of security and quality decisions

## 🔧 Configuration

### SonarQube Configuration
The `sonar-project.properties` file contains project-specific settings:
- Project identification
- Source code locations
- Test coverage reports
- Quality gate criteria

### Security Tool Configuration
- **`.snyk`**: Snyk vulnerability scanning configuration
- **`.gitleaks.toml`**: Gitleaks secret detection rules
- **`trivy.yaml`**: Trivy security scanner settings
- **`.trivyignore`**: Trivy exceptions and ignore patterns

### Workflow Configuration
The `.github/workflows/` directory contains:
- **`devsecops-pipeline.yml`**: Main CI/CD security pipeline
- **`secret-scanning.yml`**: Dedicated secret scanning workflow

## 🛡️ Security Best Practices

### For Developers
1. **Never commit secrets** - Use environment variables and secret management
2. **Run security scans locally** - Install security plugins in your IDE
3. **Follow secure coding practices** - Use OWASP guidelines
4. **Keep dependencies updated** - Regularly update to latest secure versions

### For Operations
1. **Monitor security alerts** - Review and act on security findings promptly
2. **Implement least privilege** - Limit access permissions to minimum required
3. **Regular security reviews** - Conduct periodic security assessments
4. **Incident response plan** - Have a documented plan for security incidents

## 📚 Documentation

- **[DevSecOps Pipeline Guide](DEVSECOPS.md)** - Comprehensive pipeline documentation
- **[Security Policy](SECURITY.md)** - Security practices and vulnerability reporting
- **[Contributing Guidelines](CONTRIBUTING.md)** - How to contribute to this project

## 🔗 Integrations

This pipeline integrates with:
- **GitHub Security Features** (Code scanning, Secret scanning, Dependabot)
- **SonarCloud** for code quality and security analysis
- **Snyk** for vulnerability management
- **FOSSA** for license compliance
- **Slack/Teams** for notifications
- **JIRA** for issue tracking

## 📈 Metrics Dashboard

View real-time security and quality metrics:
- [SonarCloud Dashboard](https://sonarcloud.io/project/overview?id=SudhanshuYadav174_automated-devops-code-quality)
- [GitHub Security Overview](https://github.com/SudhanshuYadav174/automated-devops-code-quality/security)
- [Actions Workflow History](https://github.com/SudhanshuYadav174/automated-devops-code-quality/actions)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on:
- Code standards and review process
- Security requirements for contributions
- Testing and quality requirements
- Documentation standards

## 📞 Support

### Security Issues
For security vulnerabilities, please **DO NOT** create public issues. Instead:
- Email: security@example.com
- Follow our [Security Policy](SECURITY.md)

### General Support
- Create an issue using our [issue templates](.github/ISSUE_TEMPLATE/)
- Join our community discussions
- Check the [documentation](DEVSECOPS.md)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 Compliance Standards

This pipeline helps ensure compliance with:
- **OWASP ASVS** - Application Security Verification Standard
- **NIST Cybersecurity Framework** - Risk management framework
- **ISO 27001** - Information security management
- **SOC 2 Type II** - Security and availability controls
- **PCI DSS** - Payment card industry standards

---

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=SudhanshuYadav174/automated-devops-code-quality&type=Date)](https://star-history.com/#SudhanshuYadav174/automated-devops-code-quality&Date)

---

**Built with ❤️ by the DevSecOps Community**