/** DevOps Mastery Quiz - 100 Questions */
const quizData = [
    // ========== IDs 1-70: MULTIPLE CHOICE QUESTIONS ==========
    
    // Docker Fundamentals (1-8)
    {
        id: 1,
        category: "Docker",
        question: "What is the purpose of a Docker multi-stage build?",
        options: [
            "To run multiple containers simultaneously",
            "To reduce final image size by excluding build dependencies",
            "To enable parallel processing during build",
            "To support multiple operating systems"
        ],
        correct: 1,
        explanation: "<strong>Multi-stage builds</strong> allow you to use multiple FROM statements, copying only necessary artifacts from previous stages to reduce final image size."
    },
    {
        id: 2,
        category: "Docker",
        question: "What is the difference between CMD and ENTRYPOINT in a Dockerfile?",
        options: [
            "They are identical and can be used interchangeably",
            "ENTRYPOINT defines the executable, CMD provides default arguments",
            "CMD is required, ENTRYPOINT is optional",
            "ENTRYPOINT only works with docker-compose"
        ],
        correct: 1,
        explanation: "<strong>ENTRYPOINT</strong> defines the fixed executable that always runs. <strong>CMD</strong> provides default arguments that can be overridden at runtime. Together they create flexible container behavior."
    },
    {
        id: 3,
        category: "Docker",
        question: "What does the HEALTHCHECK instruction do in a Dockerfile?",
        options: [
            "Automatically restarts unhealthy containers",
            "Defines a command to test if the container is still working",
            "Checks for security vulnerabilities",
            "Validates Dockerfile syntax"
        ],
        correct: 1,
        explanation: "<strong>HEALTHCHECK</strong> defines a command that Docker runs periodically to check if the container is healthy. Docker tracks the health status, which can be used for orchestration decisions."
    },
    {
        id: 4,
        category: "Docker",
        question: "What is a Docker volume used for?",
        options: [
            "To increase container memory",
            "To persist data beyond container lifecycle",
            "To compress container images",
            "To encrypt container traffic"
        ],
        correct: 1,
        explanation: "<strong>Docker volumes</strong> persist data outside the container filesystem, allowing data to survive container deletion and be shared between containers."
    },
    {
        id: 5,
        category: "Docker",
        question: "In Docker Compose, what does 'depends_on' do?",
        options: [
            "Waits for dependent service to be ready before starting",
            "Only controls startup order, not service readiness",
            "Creates network isolation between services",
            "Automatically scales dependent services"
        ],
        correct: 1,
        explanation: "<strong>depends_on</strong> only ensures startup order, not that the dependent service is actually ready. For true dependency waiting, use tools like wait-for-it or dockerize."
    },
    {
        id: 6,
        category: "Docker",
        question: "What is the difference between a Docker image and container?",
        options: [
            "They are the same thing with different names",
            "An image is a template; a container is a running instance of that template",
            "An image contains runtime data, a container is the build artifact",
            "Containers are larger than images"
        ],
        correct: 1,
        explanation: "<strong>Docker image</strong> is a read-only template with application code and dependencies. <strong>Container</strong> is a running instance of an image with a writable layer."
    },
    {
        id: 7,
        category: "Docker",
        question: "What is Docker layer caching and how does it improve builds?",
        options: [
            "Caches network requests during build",
            "Reuses unchanged layers from previous builds to speed up subsequent builds",
            "Compresses layers to reduce image size",
            "Caches container runtime memory"
        ],
        correct: 1,
        explanation: "<strong>Docker layer caching</strong> reuses layers from previous builds when the instructions and context haven't changed. Order Dockerfile instructions from least to most frequently changing to maximize cache hits."
    },
    {
        id: 8,
        category: "Docker",
        question: "What security practice should you follow with Docker containers?",
        options: [
            "Always run containers as root for maximum compatibility",
            "Run containers with non-root users and use minimal base images",
            "Disable all security features for performance",
            "Share the Docker socket with all containers"
        ],
        correct: 1,
        explanation: "<strong>Security best practices</strong>: Use non-root users (USER instruction), minimal base images (Alpine, distroless), scan for vulnerabilities, and avoid mounting Docker socket."
    },

    // Kubernetes (9-20)
    {
        id: 9,
        category: "Kubernetes",
        question: "What is the difference between a Pod and a Deployment in Kubernetes?",
        options: [
            "They are interchangeable terms",
            "A Pod is the smallest deployable unit; a Deployment manages Pod replicas and updates",
            "A Deployment runs containers, a Pod manages networking",
            "Pods are for stateful apps, Deployments for stateless"
        ],
        correct: 1,
        explanation: "<strong>Pod</strong> is the basic scheduling unit (one or more containers). <strong>Deployment</strong> is a controller that manages Pod replicas, rolling updates, and rollback capabilities."
    },
    {
        id: 10,
        category: "Kubernetes",
        question: "What does a Kubernetes Service of type LoadBalancer do?",
        options: [
            "Balances CPU load across nodes",
            "Exposes the Service externally using a cloud provider's load balancer",
            "Automatically scales Pods based on load",
            "Distributes network traffic between clusters"
        ],
        correct: 1,
        explanation: "<strong>LoadBalancer</strong> Service type provisions an external load balancer (cloud-specific) that routes traffic to the Service endpoints, exposing it outside the cluster."
    },
    {
        id: 11,
        category: "Kubernetes",
        question: "What is the purpose of a ConfigMap in Kubernetes?",
        options: [
            "To store sensitive data like passwords",
            "To store non-sensitive configuration data as key-value pairs",
            "To map container ports to host ports",
            "To configure Kubernetes API server settings"
        ],
        correct: 1,
        explanation: "<strong>ConfigMap</strong> stores non-sensitive configuration data (environment variables, config files) separately from container images, enabling configuration changes without rebuilding."
    },
    {
        id: 12,
        category: "Kubernetes",
        question: "When should you use a Kubernetes Secret instead of a ConfigMap?",
        options: [
            "For all configuration data",
            "For sensitive data like passwords, tokens, and keys",
            "Only for database connections",
            "Secrets are deprecated, always use ConfigMap"
        ],
        correct: 1,
        explanation: "<strong>Secrets</strong> are specifically designed for sensitive data. While base64 encoded (not encrypted by default), they have additional protections and can be encrypted at rest."
    },
    {
        id: 13,
        category: "Kubernetes",
        question: "What does 'kubectl rollout undo' do?",
        options: [
            "Deletes the Deployment",
            "Rolls back to the previous version of a Deployment",
            "Pauses the current rollout",
            "Shows rollout history"
        ],
        correct: 1,
        explanation: "<strong>kubectl rollout undo</strong> reverts a Deployment to the previous revision, enabling quick rollback when a new deployment has issues."
    },
    {
        id: 14,
        category: "Kubernetes",
        question: "What is a StatefulSet used for?",
        options: [
            "For stateless applications that need scaling",
            "For applications that require stable network identity and persistent storage",
            "For one-time batch jobs",
            "For cluster-wide configuration"
        ],
        correct: 1,
        explanation: "<strong>StatefulSet</strong> manages stateful applications with: stable unique network identifiers, stable persistent storage, ordered deployment/scaling, and ordered rolling updates."
    },
    {
        id: 15,
        category: "Kubernetes",
        question: "What is the function of kube-proxy?",
        options: [
            "Monitors container resource usage",
            "Maintains network rules for Pod communication and Service abstraction",
            "Proxies API server requests",
            "Manages container images"
        ],
        correct: 1,
        explanation: "<strong>kube-proxy</strong> runs on each node and maintains network rules for Pod-to-Pod and Service-to-Pod communication, implementing the Kubernetes Service concept."
    },
    {
        id: 16,
        category: "Kubernetes",
        question: "What is the difference between a DaemonSet and a ReplicaSet?",
        options: [
            "No difference, they are aliases",
            "DaemonSet runs one Pod per node; ReplicaSet maintains a specific number of Pod replicas",
            "DaemonSet is for stateful apps, ReplicaSet for stateless",
            "ReplicaSet is deprecated, DaemonSet replaces it"
        ],
        correct: 1,
        explanation: "<strong>DaemonSet</strong> ensures one Pod runs on every node (or matching nodes) - useful for logging, monitoring. <strong>ReplicaSet</strong> maintains a desired number of replicas anywhere in the cluster."
    },
    {
        id: 17,
        category: "Kubernetes",
        question: "What is the Kubernetes Horizontal Pod Autoscaler (HPA) based on?",
        options: [
            "Only CPU utilization",
            "CPU, memory, or custom metrics",
            "Only network latency",
            "Only disk usage"
        ],
        correct: 1,
        explanation: "<strong>HPA</strong> can scale based on CPU utilization, memory usage, or custom metrics (via metrics-server or Prometheus adapter), allowing flexible autoscaling policies."
    },
    {
        id: 18,
        category: "Kubernetes",
        question: "What is a Kubernetes Ingress?",
        options: [
            "A type of container network",
            "An API object that manages external access to Services, typically HTTP",
            "An internal load balancer",
            "A container image registry"
        ],
        correct: 1,
        explanation: "<strong>Ingress</strong> provides HTTP/HTTPS routing to Services from outside the cluster, offering features like SSL termination, virtual hosting, and path-based routing."
    },
    {
        id: 19,
        category: "Kubernetes",
        question: "What is the role of etcd in a Kubernetes cluster?",
        options: [
            "Container runtime",
            "Consistent and highly-available key-value store for all cluster data",
            "Network plugin",
            "Monitoring system"
        ],
        correct: 1,
        explanation: "<strong>etcd</strong> is the distributed key-value store that persists all Kubernetes cluster state, configuration, and metadata. It's the single source of truth for the cluster."
    },
    {
        id: 20,
        category: "Kubernetes",
        question: "What happens when a Pod exceeds its memory limit?",
        options: [
            "It gets throttled but continues running",
            "It is terminated (OOMKilled) by the kernel",
            "Kubernetes automatically scales up the node",
            "It starts swapping to disk"
        ],
        correct: 1,
        explanation: "When a Pod exceeds its <strong>memory limit</strong>, the Linux OOM killer terminates the container. The Pod shows status OOMKilled and may be restarted based on restartPolicy."
    },

    // CI/CD Pipelines (21-30)
    {
        id: 21,
        category: "CI/CD",
        question: "What is the main purpose of GitHub Actions 'actions/cache'?",
        options: [
            "To cache Git history",
            "To persist dependencies and build outputs between workflow runs",
            "To cache Docker images in GitHub",
            "To backup repository files"
        ],
        correct: 1,
        explanation: "<strong>actions/cache</strong> persists files like dependencies (node_modules, Maven cache) and build outputs between workflow runs, dramatically speeding up CI builds."
    },
    {
        id: 22,
        category: "CI/CD",
        question: "In GitLab CI, what is the difference between 'only' and 'rules' directives?",
        options: [
            "They are identical",
            "'rules' is the modern, more flexible replacement for 'only/except'",
            "'only' is for branches, 'rules' is for tags",
            "'rules' is deprecated"
        ],
        correct: 1,
        explanation: "<strong>rules</strong> is the modern GitLab CI syntax that replaces only/except with more flexibility, supporting if conditions, changes detection, and workflow integration."
    },
    {
        id: 23,
        category: "CI/CD",
        question: "What is a Jenkins Pipeline as Code?",
        options: [
            "A GUI-based pipeline builder",
            "A Jenkinsfile that defines the pipeline in version control",
            "A plugin for GitHub integration",
            "An automatic pipeline generator"
        ],
        correct: 1,
        explanation: "<strong>Pipeline as Code</strong> uses a Jenkinsfile (Groovy-based DSL) stored in version control, enabling versioning, code review, and audit trails for CI/CD pipelines."
    },
    {
        id: 24,
        category: "CI/CD",
        question: "What is the purpose of 'needs' in GitHub Actions?",
        options: [
            "To declare workflow dependencies",
            "To create job dependencies and enable parallel execution",
            "To specify required secrets",
            "To define environment requirements"
        ],
        correct: 1,
        explanation: "<strong>needs</strong> creates dependencies between jobs, ensuring one job runs after another completes. Jobs without dependencies run in parallel, optimizing workflow execution time."
    },
    {
        id: 25,
        category: "CI/CD",
        question: "What is artifact passing in CI/CD pipelines?",
        options: [
            "Sending notifications to developers",
            "Sharing files between pipeline stages or jobs",
            "Archiving Git history",
            "Uploading to package registries"
        ],
        correct: 1,
        explanation: "<strong>Artifacts</strong> are files produced by one job (build outputs, test results) that are saved and passed to downstream jobs, enabling pipeline stages to share data."
    },
    {
        id: 26,
        category: "CI/CD",
        question: "What is the difference between continuous delivery and continuous deployment?",
        options: [
            "They are the same thing",
            "Continuous delivery requires manual approval for production; continuous deployment is fully automated",
            "Continuous deployment is only for microservices",
            "Continuous delivery doesn't include testing"
        ],
        correct: 1,
        explanation: "<strong>Continuous Delivery</strong>: Code is automatically built, tested, and ready for production deployment (manual gate). <strong>Continuous Deployment</strong>: Fully automated, no manual intervention."
    },
    {
        id: 27,
        category: "CI/CD",
        question: "What is a matrix build in GitHub Actions?",
        options: [
            "A build that runs in multiple data centers",
            "Running the same job with different configurations (OS, language versions)",
            "A build that uses matrix math",
            "Running builds in a grid pattern"
        ],
        correct: 1,
        explanation: "<strong>Matrix builds</strong> run the same job across multiple configurations (e.g., Node 16/18/20 on Ubuntu/macOS/Windows), ensuring compatibility across environments."
    },
    {
        id: 28,
        category: "CI/CD",
        question: "What is the purpose of GitLab CI's 'environment' keyword?",
        options: [
            "To set environment variables",
            "To track deployments to specific environments (staging, production)",
            "To specify the Docker environment",
            "To define the build environment only"
        ],
        correct: 1,
        explanation: "<strong>environment</strong> in GitLab CI tracks which jobs deploy to which environments, enabling deployment tracking, rollback capabilities, and environment-specific protections."
    },
    {
        id: 29,
        category: "CI/CD",
        question: "What is a self-hosted runner in GitHub Actions?",
        options: [
            "A runner that manages itself",
            "A runner machine that you manage instead of using GitHub-hosted runners",
            "A runner for private repositories only",
            "A deprecated feature"
        ],
        correct: 1,
        explanation: "<strong>Self-hosted runners</strong> are machines you manage that run GitHub Actions workflows. Useful for: custom hardware, private network access, specific software requirements."
    },
    {
        id: 30,
        category: "CI/CD",
        question: "What is trunk-based development?",
        options: [
            "Development on multiple long-lived branches",
            "Developers collaborate on a single main branch with short-lived feature branches",
            "Development without version control",
            "Development only on release branches"
        ],
        correct: 1,
        explanation: "<strong>Trunk-based development</strong> emphasizes small, frequent commits to a single main branch with short-lived feature branches (hours, not days), enabling continuous integration."
    },

    // Infrastructure as Code (31-38)
    {
        id: 31,
        category: "IaC",
        question: "What is Terraform state used for?",
        options: [
            "To store Terraform binary",
            "To map real-world resources to configuration and track metadata",
            "To cache provider plugins",
            "To store environment variables"
        ],
        correct: 1,
        explanation: "<strong>Terraform state</strong> maps resource configurations to real-world infrastructure, tracks resource dependencies, and improves performance by caching resource attributes."
    },
    {
        id: 32,
        category: "IaC",
        question: "What is the difference between Terraform 'resource' and 'data' blocks?",
        options: [
            "No difference",
            "Resource creates/manages infrastructure; data reads existing infrastructure",
            "Data creates resources, resource reads data",
            "Resource is deprecated"
        ],
        correct: 1,
        explanation: "<strong>resource</strong> blocks create and manage infrastructure. <strong>data</strong> blocks read information about existing infrastructure not managed by the current Terraform configuration."
    },
    {
        id: 33,
        category: "IaC",
        question: "What is Ansible's idempotency principle?",
        options: [
            "Running playbooks multiple times produces the same result",
            "Each task runs only once",
            "Playbooks can only be run once",
            "Tasks are executed in random order"
        ],
        correct: 0,
        explanation: "<strong>Idempotency</strong> means running an Ansible playbook multiple times produces the same system state. If a configuration is already correct, Ansible makes no changes."
    },
    {
        id: 34,
        category: "IaC",
        question: "What is a Terraform module?",
        options: [
            "A single Terraform resource",
            "A reusable container for multiple resources that can be called with inputs",
            "A Terraform provider plugin",
            "A state file backup"
        ],
        correct: 1,
        explanation: "<strong>Terraform modules</strong> are reusable, composable units that group related resources. They accept input variables and output values, enabling infrastructure abstraction and reuse."
    },
    {
        id: 35,
        category: "IaC",
        question: "What is CloudFormation's 'DeletionPolicy'?",
        options: [
            "Prevents any resource deletion",
            "Controls what happens to resources when the stack is deleted",
            "Automatically backs up resources before deletion",
            "Requires manual approval for deletion"
        ],
        correct: 1,
        explanation: "<strong>DeletionPolicy</strong> controls resource behavior on stack deletion: Delete (default), Retain (keep resource), or Snapshot (for EBS, RDS, Redshift before deletion)."
    },
    {
        id: 36,
        category: "IaC",
        question: "What is the difference between Ansible 'roles' and 'playbooks'?",
        options: [
            "They are the same",
            "Roles are reusable units of organization; playbooks orchestrate roles and tasks",
            "Playbooks are for configuration, roles are for deployment",
            "Roles are deprecated"
        ],
        correct: 1,
        explanation: "<strong>Roles</strong> are self-contained, portable units that group tasks, variables, files, and templates. <strong>Playbooks</strong> orchestrate roles and tasks against target hosts."
    },
    {
        id: 37,
        category: "IaC",
        question: "What is Terraform 'plan' command used for?",
        options: [
            "To execute changes immediately",
            "To preview changes before applying them",
            "To create a backup plan",
            "To generate documentation"
        ],
        correct: 1,
        explanation: "<strong>terraform plan</strong> creates an execution plan showing what Terraform will do (create, modify, destroy) without making actual changes - essential for review and approval workflows."
    },
    {
        id: 38,
        category: "IaC",
        question: "What is Pulumi's main differentiator from Terraform?",
        options: [
            "It's cheaper",
            "Uses general-purpose programming languages (TypeScript, Python, Go) instead of HCL",
            "Only works with AWS",
            "Doesn't require state management"
        ],
        correct: 1,
        explanation: "<strong>Pulumi</strong> allows infrastructure definition using familiar programming languages (TypeScript, Python, Go, .NET), enabling loops, conditionals, and software engineering practices."
    },

    // Monitoring & Observability (39-46)
    {
        id: 39,
        category: "Observability",
        question: "What is the difference between metrics, logs, and traces?",
        options: [
            "They are interchangeable terms",
            "Metrics are numeric aggregations, logs are event records, traces show request flow across services",
            "Metrics are for errors, logs are for performance, traces are for debugging",
            "Only metrics matter in production"
        ],
        correct: 1,
        explanation: "<strong>Metrics</strong>: Numeric data over time (CPU, latency). <strong>Logs</strong>: Timestamped event records. <strong>Traces</strong>: End-to-end request flow across distributed services (the three pillars of observability)."
    },
    {
        id: 40,
        category: "Observability",
        question: "What is Prometheus used for?",
        options: [
            "Log aggregation only",
            "Time-series metrics collection and alerting",
            "Distributed tracing only",
            "Container orchestration"
        ],
        correct: 1,
        explanation: "<strong>Prometheus</strong> is an open-source monitoring system that collects time-series metrics via pull model, stores them efficiently, and supports powerful alerting through Alertmanager."
    },
    {
        id: 41,
        category: "Observability",
        question: "What is a RED metric in microservices monitoring?",
        options: [
            "Resource, Error, Deployment",
            "Rate, Errors, Duration",
            "Request, Event, Database",
            "Response, Error, Debug"
        ],
        correct: 1,
        explanation: "<strong>RED</strong>: <strong>R</strong>ate (requests per second), <strong>E</strong>rrors (failed requests), <strong>D</strong>uration (latency). Essential metrics for monitoring any microservice."
    },
    {
        id: 42,
        category: "Observability",
        question: "What is the purpose of Grafana?",
        options: [
            "Collecting metrics from applications",
            "Visualizing metrics and creating dashboards from various data sources",
            "Storing logs long-term",
            "Running distributed traces"
        ],
        correct: 1,
        explanation: "<strong>Grafana</strong> is an open-source visualization platform that creates dashboards from multiple data sources (Prometheus, InfluxDB, Elasticsearch, CloudWatch, etc.)."
    },
    {
        id: 43,
        category: "Observability",
        question: "What is distributed tracing used for?",
        options: [
            "Logging application errors",
            "Tracking a request's journey through multiple microservices",
            "Monitoring CPU usage",
            "Collecting user analytics"
        ],
        correct: 1,
        explanation: "<strong>Distributed tracing</strong> (e.g., Jaeger, Zipkin) follows requests across service boundaries, helping identify latency bottlenecks and failure points in microservice architectures."
    },
    {
        id: 44,
        category: "Observability",
        question: "What is the ELK stack?",
        options: [
            "A container orchestration platform",
            "Elasticsearch, Logstash, Kibana for log aggregation and analysis",
            "A Kubernetes monitoring tool",
            "An infrastructure as code tool"
        ],
        correct: 1,
        explanation: "<strong>ELK Stack</strong>: <strong>E</strong>lasticsearch (search & analytics), <strong>L</strong>ogstash (log processing), <strong>K</strong>ibana (visualization). Often with Beats for log shipping."
    },
    {
        id: 45,
        category: "Observability",
        question: "What is a service level objective (SLO)?",
        options: [
            "A legal contract with customers",
            "A target reliability goal for a service (e.g., 99.9% uptime)",
            "A monitoring tool configuration",
            "A deployment checklist"
        ],
        correct: 1,
        explanation: "<strong>SLO</strong> is a reliability target (e.g., 99.9% availability, p99 latency < 200ms). It's the foundation of Site Reliability Engineering (SRE) practices."
    },
    {
        id: 46,
        category: "Observability",
        question: "What is the purpose of log aggregation?",
        options: [
            "To delete old logs automatically",
            "To centralize logs from multiple sources for search and analysis",
            "To encrypt log files",
            "To reduce log file size"
        ],
        correct: 1,
        explanation: "<strong>Log aggregation</strong> collects logs from distributed services into a central system (ELK, Splunk, Datadog), enabling search, correlation, and alerting across the entire infrastructure."
    },

    // Cloud Platforms (47-54)
    {
        id: 47,
        category: "Cloud",
        question: "What is the difference between AWS ECS and EKS?",
        options: [
            "They are the same service",
            "ECS is AWS's container orchestrator; EKS is managed Kubernetes",
            "ECS is for VMs, EKS is for containers",
            "EKS is cheaper than ECS"
        ],
        correct: 1,
        explanation: "<strong>ECS</strong>: AWS-native container orchestration. <strong>EKS</strong>: Managed Kubernetes service. EKS offers Kubernetes compatibility; ECS is simpler and more AWS-integrated."
    },
    {
        id: 48,
        category: "Cloud",
        question: "What is an AWS Auto Scaling Group?",
        options: [
            "A group of databases that scale automatically",
            "A collection of EC2 instances that scale based on demand",
            "A network load balancer",
            "A container registry"
        ],
        correct: 1,
        explanation: "<strong>Auto Scaling Groups</strong> maintain a desired number of EC2 instances, automatically launching or terminating instances based on scaling policies and health checks."
    },
    {
        id: 49,
        category: "Cloud",
        question: "What is Google Cloud Run?",
        options: [
            "A CI/CD service",
            "A managed serverless platform for running containerized applications",
            "A virtual machine service",
            "A database service"
        ],
        correct: 1,
        explanation: "<strong>Cloud Run</strong> is a fully managed serverless platform that runs containers, scaling automatically from zero to many instances based on HTTP requests."
    },
    {
        id: 50,
        category: "Cloud",
        question: "What is Azure AKS?",
        options: [
            "Azure's serverless function service",
            "Azure's managed Kubernetes service",
            "Azure's container registry",
            "Azure's virtual network"
        ],
        correct: 1,
        explanation: "<strong>AKS (Azure Kubernetes Service)</strong> is Microsoft's managed Kubernetes offering that handles cluster management, upgrades, and scaling."
    },
    {
        id: 51,
        category: "Cloud",
        question: "What is the purpose of an AWS Application Load Balancer (ALB)?",
        options: [
            "To balance database connections",
            "To route HTTP/HTTPS traffic based on content (path, host, headers)",
            "To distribute DNS traffic",
            "To balance storage load"
        ],
        correct: 1,
        explanation: "<strong>ALB</strong> operates at Layer 7 (application layer), routing HTTP/HTTPS traffic based on URL path, host headers, and query parameters to different target groups."
    },
    {
        id: 52,
        category: "Cloud",
        question: "What is AWS Fargate?",
        options: [
            "A compute engine for EC2",
            "Serverless compute for containers that eliminates EC2 management",
            "A container registry service",
            "A monitoring service"
        ],
        correct: 1,
        explanation: "<strong>Fargate</strong> is serverless compute for containers. You run containers without provisioning or managing servers - AWS handles the underlying infrastructure."
    },
    {
        id: 53,
        category: "Cloud",
        question: "What is the difference between IaC tools and cloud consoles?",
        options: [
            "No difference, they do the same thing",
            "IaC provides version-controlled, repeatable infrastructure; consoles are for ad-hoc changes",
            "Consoles are only for debugging",
            "IaC is only for production"
        ],
        correct: 1,
        explanation: "<strong>IaC</strong> (Terraform, CloudFormation) provides version control, review processes, and reproducibility. Consoles are for exploration, debugging, and emergencies only."
    },
    {
        id: 54,
        category: "Cloud",
        question: "What is a GCP VPC?",
        options: [
            "A virtual private cloud providing isolated network environment",
            "A virtual machine type",
            "A container platform",
            "A storage bucket"
        ],
        correct: 0,
        explanation: "<strong>VPC (Virtual Private Cloud)</strong> provides an isolated, customizable network environment in the cloud where you can define IP ranges, subnets, firewalls, and routing."
    },

    // Git Workflows (55-60)
    {
        id: 55,
        category: "Git",
        question: "What is the difference between Git merge and Git rebase?",
        options: [
            "They are identical",
            "Merge creates a merge commit; rebase reapplies commits on top of base for linear history",
            "Rebase creates merge commits, merge creates linear history",
            "Rebase deletes commits"
        ],
        correct: 1,
        explanation: "<strong>Merge</strong>: Preserves history, creates merge commit. <strong>Rebase</strong>: Reapplies commits on top of base branch, creating linear history (don't rebase shared branches)."
    },
    {
        id: 56,
        category: "Git",
        question: "What is GitFlow?",
        options: [
            "A Git hosting service",
            "A branching model with main, develop, feature, release, and hotfix branches",
            "A Git GUI tool",
            "A continuous integration tool"
        ],
        correct: 1,
        explanation: "<strong>GitFlow</strong> is a branching strategy with: main (production), develop (integration), feature/*, release/*, and hotfix/* branches for structured release management."
    },
    {
        id: 57,
        category: "Git",
        question: "What does 'git cherry-pick' do?",
        options: [
            "Deletes a commit",
            "Applies the changes from a specific commit to the current branch",
            "Merges two branches",
            "Shows commit history"
        ],
        correct: 1,
        explanation: "<strong>git cherry-pick</strong> applies the changes from a specific commit (from any branch) onto the current branch, creating a new commit with the same changes."
    },
    {
        id: 58,
        category: "Git",
        question: "What is a Git pre-commit hook?",
        options: [
            "A Git hosting feature",
            "A script that runs before a commit is created to validate changes",
            "A way to commit without messages",
            "A backup mechanism"
        ],
        correct: 1,
        explanation: "<strong>Pre-commit hooks</strong> run before a commit is finalized. They're used for linting, formatting, running tests, and ensuring code quality standards."
    },
    {
        id: 59,
        category: "Git",
        question: "What is the purpose of 'git stash'?",
        options: [
            "To permanently delete changes",
            "To temporarily save uncommitted changes and revert to clean working directory",
            "To share changes with others",
            "To create a new branch"
        ],
        correct: 1,
        explanation: "<strong>git stash</strong> temporarily saves uncommitted changes, allowing you to switch branches or pull updates without committing incomplete work."
    },
    {
        id: 60,
        category: "Git",
        question: "What is semantic versioning (SemVer)?",
        options: [
            "A Git branching strategy",
            "MAJOR.MINOR.PATCH format where each number has specific meaning for API changes",
            "A commit message format",
            "A code review process"
        ],
        correct: 1,
        explanation: "<strong>SemVer</strong>: <strong>MAJOR</strong> (breaking changes).<strong>MINOR</strong> (new features, backward compatible).<strong>PATCH</strong> (bug fixes). E.g., 2.1.3 → breaking.new.fix"
    },

    // Container Orchestration & Service Mesh (61-66)
    {
        id: 61,
        category: "Service Mesh",
        question: "What is a service mesh?",
        options: [
            "A container registry",
            "A dedicated infrastructure layer for service-to-service communication",
            "A load balancer configuration",
            "A database connection pool"
        ],
        correct: 1,
        explanation: "<strong>Service mesh</strong> (Istio, Linkerd) is a dedicated infrastructure layer that handles service-to-service communication: traffic management, security, and observability."
    },
    {
        id: 62,
        category: "Service Mesh",
        question: "What is Istio's sidecar proxy pattern?",
        options: [
            "Running a proxy on separate VMs",
            "Injecting a proxy container alongside application containers in the same Pod",
            "Using a central proxy for all services",
            "A network security group"
        ],
        correct: 1,
        explanation: "<strong>Sidecar pattern</strong>: Istio injects an Envoy proxy container into each Pod alongside the application container, intercepting all network traffic for mesh features."
    },
    {
        id: 63,
        category: "Service Mesh",
        question: "What is mutual TLS (mTLS) in a service mesh?",
        options: [
            "Encrypting data at rest",
            "Both client and server authenticate each other with certificates",
            "Using two different TLS certificates",
            "Encrypting only the response"
        ],
        correct: 1,
        explanation: "<strong>mTLS</strong> ensures both service client and server present and verify certificates, providing encrypted, authenticated communication within the mesh."
    },
    {
        id: 64,
        category: "Service Mesh",
        question: "What is traffic splitting in a service mesh?",
        options: [
            "Dividing network traffic by protocol",
            "Routing percentages of traffic to different service versions (canary)",
            "Splitting traffic across regions",
            "Dividing traffic by time of day"
        ],
        correct: 1,
        explanation: "<strong>Traffic splitting</strong> routes specific percentages of requests to different service versions, enabling canary deployments and A/B testing."
    },
    {
        id: 65,
        category: "Service Mesh",
        question: "What is Helm used for in Kubernetes?",
        options: [
            "Container runtime",
            "Package manager for Kubernetes applications (charts)",
            "Container registry",
            "Monitoring tool"
        ],
        correct: 1,
        explanation: "<strong>Helm</strong> is the Kubernetes package manager. <strong>Charts</strong> are Helm packages containing templated Kubernetes manifests for repeatable application deployment."
    },
    {
        id: 66,
        category: "Service Mesh",
        question: "What is Kustomize?",
        options: [
            "A container build tool",
            "A Kubernetes native configuration management tool for customizing manifests",
            "A container registry",
            "A CI/CD pipeline tool"
        ],
        correct: 1,
        explanation: "<strong>Kustomize</strong> is a Kubernetes-native tool for customizing YAML configurations through overlays, patches, and transformations without templating."
    },

    // Deployment Strategies (67-72)
    {
        id: 67,
        category: "Deployment",
        question: "What is blue-green deployment?",
        options: [
            "A deployment using blue and green colors in the UI",
            "Running two identical environments and switching traffic for zero-downtime",
            "A phased rollout to specific users",
            "A rollback strategy only"
        ],
        correct: 1,
        explanation: "<strong>Blue-green deployment</strong> maintains two identical environments. Blue runs production traffic while green is updated. Traffic switches instantly when green is ready."
    },
    {
        id: 68,
        category: "Deployment",
        question: "What is canary deployment?",
        options: [
            "Deploying only to servers in Canary Islands",
            "Releasing to a small subset of users before full rollout",
            "A deployment that only works during the day",
            "A backup deployment strategy"
        ],
        correct: 1,
        explanation: "<strong>Canary deployment</strong> rolls out new version to a small percentage of users/traffic first. If metrics look good, gradually increase traffic; if issues, rollback quickly."
    },
    {
        id: 69,
        category: "Deployment",
        question: "What is a rolling deployment?",
        options: [
            "Deploying all instances at once",
            "Gradually replacing old instances with new ones, one at a time",
            "Rolling back to previous version",
            "A deployment that never completes"
        ],
        correct: 1,
        explanation: "<strong>Rolling deployment</strong> replaces instances gradually (e.g., 1 at a time), keeping the application available throughout but potentially running mixed versions temporarily."
    },
    {
        id: 70,
        category: "Deployment",
        question: "What is feature flagging?",
        options: [
            "A way to flag errors in features",
            "Toggling features on/off without deploying new code",
            "A deployment rollback mechanism",
            "A code review process"
        ],
        correct: 1,
        explanation: "<strong>Feature flags</strong> (feature toggles) enable/disable features at runtime via configuration, decoupling deployment from release and enabling gradual rollouts."
    },

    // Continue with more MCQ to reach 70, then open-ended (71-100)
    // Adding more questions to reach 70 MCQ total

    // Secrets Management (71-74)
    {
        id: 71,
        category: "Secrets",
        question: "What is HashiCorp Vault used for?",
        options: [
            "Storing Docker images",
            "Securely storing and managing secrets, credentials, and encryption keys",
            "Version control for secrets",
            "A password generator only"
        ],
        correct: 1,
        explanation: "<strong>HashiCorp Vault</strong> is a secrets management tool that securely stores credentials, provides dynamic secrets, encryption as a service, and fine-grained access control."
    },
    {
        id: 72,
        category: "Secrets",
        question: "What is the risk of hardcoding secrets in code repositories?",
        options: [
            "It makes code run faster",
            "Secrets are exposed in Git history forever, even if deleted",
            "It improves security",
            "It has no risks"
        ],
        correct: 1,
        explanation: "<strong>Hardcoded secrets</strong> remain in Git history even after deletion. Attackers scan public repositories for API keys, passwords, and credentials constantly."
    },
    {
        id: 73,
        category: "Secrets",
        question: "What is a Kubernetes Sealed Secret?",
        options: [
            "A Secret with password protection",
            "An encrypted Secret that can be safely stored in Git",
            "A Secret that expires automatically",
            "A read-only Secret"
        ],
        correct: 1,
        explanation: "<strong>Sealed Secrets</strong> (Bitnami) encrypt Secrets so they can be stored in Git repositories safely. Only the cluster controller can decrypt them."
    },
    {
        id: 74,
        category: "Secrets",
        question: "What is AWS Secrets Manager?",
        options: [
            "A password generator",
            "A service to securely store, rotate, and retrieve secrets",
            "A Git repository",
            "An encryption algorithm"
        ],
        correct: 1,
        explanation: "<strong>AWS Secrets Manager</strong> securely stores secrets, enables automatic rotation, and provides fine-grained IAM access control for credentials and API keys."
    },

    // Troubleshooting & Best Practices (75-78)
    {
        id: 75,
        category: "Troubleshooting",
        question: "What does 'kubectl logs' command do?",
        options: [
            "Shows cluster events",
            "Retrieves container logs from a Pod",
            "Displays resource usage",
            "Lists all Pods"
        ],
        correct: 1,
        explanation: "<strong>kubectl logs</strong> retrieves the stdout/stderr logs from containers in a Pod, essential for debugging application issues."
    },
    {
        id: 76,
        category: "Troubleshooting",
        question: "What is 'kubectl exec' used for?",
        options: [
            "To delete Pods",
            "To execute commands inside a running container",
            "To scale Deployments",
            "To view cluster configuration"
        ],
        correct: 1,
        explanation: "<strong>kubectl exec</strong> runs commands inside a container. Common use: <code>kubectl exec -it pod-name -- /bin/sh</code> for interactive debugging."
    },
    {
        id: 77,
        category: "Troubleshooting",
        question: "What is 'docker system prune' used for?",
        options: [
            "To backup Docker data",
            "To remove unused data (containers, networks, images, volumes)",
            "To update Docker",
            "To list running containers"
        ],
        correct: 1,
        explanation: "<strong>docker system prune</strong> cleans up unused Docker objects, freeing disk space. Use carefully as it removes stopped containers and dangling images."
    },
    {
        id: 78,
        category: "Troubleshooting",
        question: "What is a common cause of Kubernetes Pod 'CrashLoopBackOff'?",
        options: [
            "Too many Pods running",
            "Application crashing on startup or failing health checks",
            "Network is disconnected",
            "Cluster has too many nodes"
        ],
        correct: 1,
        explanation: "<strong>CrashLoopBackOff</strong> means the container keeps crashing. Common causes: missing env vars, config errors, missing dependencies, failing readiness/liveness probes."
    },

    // Additional topics (79-88)
    {
        id: 79,
        category: "Docker",
        question: "What is the difference between Docker COPY and ADD?",
        options: [
            "They are identical",
            "ADD can extract archives and download URLs; COPY is simpler and preferred",
            "COPY is deprecated",
            "ADD only works with text files"
        ],
        correct: 1,
        explanation: "<strong>COPY</strong> simply copies files (preferred for clarity). <strong>ADD</strong> also extracts tar archives and downloads from URLs (use sparingly)."
    },
    {
        id: 80,
        category: "Kubernetes",
        question: "What is a Kubernetes Namespace used for?",
        options: [
            "To encrypt resources",
            "To organize resources into virtual clusters for isolation",
            "To speed up deployments",
            "To backup resources"
        ],
        correct: 1,
        explanation: "<strong>Namespaces</strong> provide virtual cluster separation, enabling multiple teams/projects to share a cluster with resource quotas and access control boundaries."
    },
    {
        id: 81,
        category: "CI/CD",
        question: "What is 'shift-left testing'?",
        options: [
            "Testing on the left side of the screen",
            "Moving testing earlier in the development lifecycle",
            "Testing only on the left branch",
            "A testing framework"
        ],
        correct: 1,
        explanation: "<strong>Shift-left testing</strong> integrates testing earlier in the development process, catching issues before they become expensive production problems."
    },
    {
        id: 82,
        category: "IaC",
        question: "What is Terraform 'workspace'?",
        options: [
            "A code editor",
            "Multiple state files for the same configuration (dev/staging/prod)",
            "A shared folder",
            "A collaboration tool"
        ],
        correct: 1,
        explanation: "<strong>Terraform workspaces</strong> maintain multiple state files for the same configuration, enabling environment separation (dev, staging, production) with the same code."
    },
    {
        id: 83,
        category: "Observability",
        question: "What is a 'golden signal' in monitoring?",
        options: [
            "A signal to start monitoring",
            "Latency, Traffic, Errors, Saturation - key metrics for system health",
            "An alert notification",
            "A dashboard color"
        ],
        correct: 1,
        explanation: "<strong>Golden signals</strong> (from Google SRE book): <strong>Latency</strong>, <strong>Traffic</strong>, <strong>Errors</strong>, <strong>Saturation</strong> - the four key metrics for understanding system health."
    },
    {
        id: 84,
        category: "Cloud",
        question: "What is a serverless function (AWS Lambda, Cloud Functions)?",
        options: [
            "A function without any code",
            "Event-driven code that runs without managing servers",
            "A local function call",
            "A database function"
        ],
        correct: 1,
        explanation: "<strong>Serverless functions</strong> run code in response to events without provisioning servers. You pay only for execution time, and scaling is automatic."
    },
    {
        id: 85,
        category: "Git",
        question: "What is a Git submodule?",
        options: [
            "A Git hosting service",
            "A Git repository inside another Git repository",
            "A branch type",
            "A merge strategy"
        ],
        correct: 1,
        explanation: "<strong>Git submodules</strong> allow you to include one Git repository as a subdirectory of another, useful for shared libraries or dependencies."
    },
    {
        id: 86,
        category: "Service Mesh",
        question: "What is circuit breaking in a service mesh?",
        options: [
            "Breaking the network circuit",
            "Stopping requests to failing services to prevent cascade failures",
            "A deployment strategy",
            "A security feature"
        ],
        correct: 1,
        explanation: "<strong>Circuit breaking</strong> stops sending requests to failing upstream services, preventing cascading failures and giving services time to recover."
    },
    {
        id: 87,
        category: "Deployment",
        question: "What is a dark launch?",
        options: [
            "Deploying only at night",
            "Deploying features to production without exposing them to users",
            "A failed deployment",
            "Deploying without testing"
        ],
        correct: 1,
        explanation: "<strong>Dark launch</strong> deploys code to production without user-facing changes, allowing testing of infrastructure and performance with real traffic."
    },
    {
        id: 88,
        category: "Secrets",
        question: "What is short-lived credential principle?",
        options: [
            "Using weak passwords",
            "Credentials that expire quickly to reduce blast radius if compromised",
            "Sharing credentials briefly",
            "A password rotation GUI"
        ],
        correct: 1,
        explanation: "<strong>Short-lived credentials</strong> (temporary tokens, dynamic secrets) expire quickly, reducing the window of opportunity for attackers if credentials are compromised."
    },

    // Final MCQ to reach 88 before scenario-based
    {
        id: 89,
        category: "Troubleshooting",
        question: "What does 'kubectl describe pod' show?",
        options: [
            "Only the Pod name",
            "Detailed Pod information including events, conditions, and errors",
            "Only resource usage",
            "Only environment variables"
        ],
        correct: 1,
        explanation: "<strong>kubectl describe</strong> provides detailed resource information including events, status conditions, and recent changes - essential for troubleshooting."
    },
    {
        id: 90,
        category: "Docker",
        question: "What is Docker Compose 'profiles' feature?",
        options: [
            "User profiles for Docker Hub",
            "Selectively enabling services based on use case (dev, test, prod)",
            "Container resource profiles",
            "Network security profiles"
        ],
        correct: 1,
        explanation: "<strong>Compose profiles</strong> let you define which services to start for specific use cases. E.g., 'dev' profile might include debugging tools not needed in production."
    },

    // ========== IDs 91-100: SCENARIO-BASED OPEN-ENDED QUESTIONS ==========
    
    {
        id: 91,
        category: "Troubleshooting",
        type: "open",
        question: "Scenario: Your Kubernetes Pod is stuck in 'Pending' state for 10 minutes. kubectl describe shows 'FailedScheduling: 0/3 nodes are available: 3 Insufficient memory'. How do you diagnose and fix this?",
        answer: "1. Check Pod memory requests vs node capacity: kubectl describe nodes. 2. Review resource quotas: kubectl describe resourcequota. 3. Options: reduce Pod memory requests, add more nodes, or enable cluster autoscaling. 4. Check for Pod disruption budgets that might be preventing rescheduling. 5. Consider using node affinity to target larger nodes if available.",
        explanation: "FailedScheduling with resource constraints means no node meets the Pod's resource requirements. Solutions involve right-sizing requests, scaling cluster capacity, or optimizing resource allocation across workloads."
    },
    {
        id: 92,
        category: "CI/CD",
        type: "open",
        question: "Scenario: Your deployment pipeline takes 30 minutes but you need faster feedback. The build step compiles code, runs unit tests, then integration tests, then security scans. How do you optimize?",
        answer: "1. Parallelize independent jobs - unit tests and security scans can run simultaneously. 2. Cache dependencies between runs (node_modules, Maven cache). 3. Use matrix builds for different environments. 4. Run quick smoke tests first, full suite on main branch only. 5. Use Docker layer caching. 6. Consider test splitting across multiple runners. 7. Optimize slow tests or move to nightly runs.",
        explanation: "Pipeline optimization focuses on parallelization, caching, and prioritizing fast feedback. Not all tests need to run on every commit."
    },
    {
        id: 93,
        category: "Kubernetes",
        type: "open",
        question: "Scenario: You need to deploy a stateful application (PostgreSQL) on Kubernetes with high availability. The database requires persistent storage and stable network identity. How do you design this?",
        answer: "1. Use StatefulSet for stable network identity and ordered deployment. 2. Define VolumeClaimTemplates for persistent storage per replica. 3. Configure headless Service for stable DNS. 4. Consider using managed database (RDS, Cloud SQL) instead for production. 5. If self-managing: implement proper backup with pg_dump or WAL archiving. 6. Use PodDisruptionBudgets to ensure availability during node maintenance. 7. Configure resource limits and requests appropriately.",
        explanation: "Stateful workloads on Kubernetes require StatefulSet for identity stability and persistent volumes. However, managed databases are often preferred for production to reduce operational burden."
    },
    {
        id: 94,
        category: "Docker",
        type: "open",
        question: "Scenario: Your Docker image is 2GB and takes 15 minutes to build. The Dockerfile uses 'FROM ubuntu:latest' and installs many packages. How do you optimize image size and build time?",
        answer: "1. Use smaller base image: alpine or distroless instead of ubuntu. 2. Implement multi-stage builds - compile in one stage, copy artifacts to final image. 3. Combine RUN commands to reduce layers. 4. Use .dockerignore to exclude unnecessary files. 5. Leverage build cache by ordering instructions from least to most frequently changing. 6. Remove build dependencies in same layer they're installed. 7. Use specific image tags instead of 'latest' for reproducibility."
    },
    {
        id: 95,
        category: "IaC",
        type: "open",
        question: "Scenario: Your Terraform state file is stored locally. Team members are overwriting each other's changes, and there's no audit trail. How do you implement proper state management?",
        answer: "1. Migrate to remote state backend (S3 with DynamoDB locking, Terraform Cloud, or Azure Storage). 2. Enable state locking to prevent concurrent modifications. 3. Enable state versioning for audit trail and recovery. 4. Implement state encryption at rest. 5. Use workspace separation for environments. 6. Set up CI/CD pipeline to apply changes after review. 7. Implement OPA or Sentinel policies for governance."
    },
    {
        id: 96,
        category: "Observability",
        type: "open",
        question: "Scenario: Your microservices application has intermittent 500 errors. Logs don't show the root cause as errors originate from service-to-service communication. How do you approach debugging?",
        answer: "1. Implement distributed tracing (Jaeger, Zipkin) to follow requests across services. 2. Add correlation IDs to track request flow in logs. 3. Set up RED metrics (Rate, Errors, Duration) for each service. 4. Use service mesh (Istio/Linkerd) for automatic metrics and tracing. 5. Add health and readiness probes for better failure detection. 6. Implement circuit breakers to prevent cascade failures. 7. Create dashboards showing request flow and error rates between services."
    },
    {
        id: 97,
        category: "Deployment",
        type: "open",
        question: "Scenario: You need to deploy a critical update to a payment service with zero downtime. The service has database schema changes. How do you design the deployment?",
        answer: "1. Use backward-compatible schema changes first (add columns, don't drop). 2. Deploy application with feature flags for new schema usage. 3. Use blue-green or canary deployment strategy. 4. Run data migration as separate job before deployment. 5. Monitor error rates and business metrics during rollout. 6. Have automated rollback ready. 7. Use database migration tools (Flyway, Liquibase) for versioned schema changes. 8. Test rollback procedure before deployment."
    },
    {
        id: 98,
        category: "Secrets",
        type: "open",
        question: "Scenario: Your application currently reads database credentials from environment variables. Security audit requires credential rotation every 30 days and audit logs for credential access. How do you redesign?",
        answer: "1. Migrate to HashiCorp Vault or cloud secrets manager (AWS Secrets Manager, Azure Key Vault). 2. Implement dynamic secrets that rotate automatically. 3. Use sidecar or init container to inject secrets at runtime. 4. Enable audit logging in the secrets manager. 5. Update application to read from secret files or Vault API. 6. Implement short-lived tokens instead of long-lived credentials. 7. Set up alerts for secret access patterns. 8. Remove credentials from environment variables and source control."
    },
    {
        id: 99,
        category: "Troubleshooting",
        type: "open",
        question: "Scenario: After a deployment, your application shows high memory usage and gets OOMKilled by Kubernetes. The same code worked fine in staging. How do you diagnose and fix?",
        answer: "1. Check if production has different data volumes causing memory spikes. 2. Review memory limits in Kubernetes - they might be too low. 3. Analyze memory profiling data or heap dumps. 4. Check for memory leaks - objects not being garbage collected. 5. Compare environment configurations (connection pool sizes, cache settings). 6. Monitor memory usage patterns over time. 7. Consider vertical pod autoscaling for memory. 8. Add memory requests/limits based on actual usage patterns, not estimates."
    },
    {
        id: 100,
        category: "Architecture",
        type: "open",
        question: "Scenario: You're designing a multi-region disaster recovery strategy for a containerized application on Kubernetes. RTO is 1 hour, RPO is 15 minutes. How do you architect this?",
        answer: "1. Deploy active-passive or active-active across regions. 2. Use global load balancer (Route 53, Cloudflare) for traffic routing. 3. Implement cross-region database replication (async for performance). 4. Use multi-region container registry with replication. 5. Store Terraform/Kubernetes manifests in Git for quick reconstruction. 6. Automate failover with health checks and traffic shifting. 7. Regular DR drills to validate RTO. 8. Consider backup Kubernetes clusters in secondary region. 9. Use infrastructure as code for consistent environment recreation."
    }
];
