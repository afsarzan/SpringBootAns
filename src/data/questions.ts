export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const questions: Question[] = [
  // Spring Boot Fundamentals
  {
    id: 1,
    category: "Fundamentals",
    question: "What is the recommended way to create a Spring Boot application?",
    options: [
      "Using Spring Initializr",
      "Manual Maven/Gradle setup",
      "Copying from existing projects",
      "Using IDE templates"
    ],
    correct: 0,
    explanation: "Spring Initializr (start.spring.io) is the official and recommended way to bootstrap Spring Boot applications with proper dependencies and structure."
  },
  {
    id: 2,
    category: "Fundamentals",
    question: "Which annotation should be used on the main class of a Spring Boot application?",
    options: [
      "@SpringBootApplication",
      "@Configuration",
      "@EnableAutoConfiguration",
      "@ComponentScan"
    ],
    correct: 0,
    explanation: "@SpringBootApplication is a meta-annotation that combines @Configuration, @EnableAutoConfiguration, and @ComponentScan."
  },
  {
    id: 3,
    category: "Configuration",
    question: "What is the preferred format for Spring Boot configuration files?",
    options: [
      "application.properties",
      "application.yml",
      "Both are equally good",
      "XML configuration"
    ],
    correct: 1,
    explanation: "YAML format (application.yml) is preferred as it's more readable, supports nested properties, and allows for better organization of configuration."
  },
  {
    id: 4,
    category: "Configuration",
    question: "How should you externalize configuration in Spring Boot?",
    options: [
      "Hard-code in application.properties",
      "Use environment variables and profiles",
      "Store in database",
      "Use system properties only"
    ],
    correct: 1,
    explanation: "Environment variables and Spring profiles provide flexibility for different deployment environments while keeping configuration external to the code."
  },
  {
    id: 5,
    category: "Security",
    question: "What should you do with sensitive information like passwords in Spring Boot?",
    options: [
      "Store in application.properties",
      "Hard-code in the source code",
      "Use environment variables or secret management",
      "Store in version control"
    ],
    correct: 2,
    explanation: "Sensitive information should never be in source code or configuration files committed to version control. Use environment variables or dedicated secret management systems."
  },
  {
    id: 6,
    category: "Data",
    question: "What is the recommended way to handle database migrations in Spring Boot?",
    options: [
      "Manual SQL scripts",
      "Flyway or Liquibase",
      "JPA DDL auto-generation",
      "Database-specific tools"
    ],
    correct: 1,
    explanation: "Flyway or Liquibase provide version control for database schema changes, making migrations repeatable and trackable across environments."
  },
  {
    id: 7,
    category: "Data",
    question: "Which JPA setting should you avoid in production?",
    options: [
      "spring.jpa.hibernate.ddl-auto=validate",
      "spring.jpa.hibernate.ddl-auto=create-drop",
      "spring.jpa.hibernate.ddl-auto=none",
      "spring.jpa.show-sql=false"
    ],
    correct: 1,
    explanation: "create-drop will drop and recreate tables on each startup, causing data loss. Use 'validate' or 'none' in production."
  },
  {
    id: 8,
    category: "Web",
    question: "What is the best practice for handling exceptions in Spring Boot REST APIs?",
    options: [
      "Try-catch in every controller method",
      "Global exception handler with @ControllerAdvice",
      "Return error codes in response",
      "Let exceptions propagate"
    ],
    correct: 1,
    explanation: "@ControllerAdvice allows centralized exception handling, promoting DRY principle and consistent error responses across the application."
  },
  {
    id: 9,
    category: "Web",
    question: "How should you validate request data in Spring Boot?",
    options: [
      "Manual validation in controller",
      "Bean Validation annotations with @Valid",
      "Custom validation logic",
      "Client-side validation only"
    ],
    correct: 1,
    explanation: "Bean Validation annotations (@NotNull, @Valid, etc.) provide declarative validation that's standardized and easily testable."
  },
  {
    id: 10,
    category: "Testing",
    question: "Which annotation should you use for testing only the web layer?",
    options: [
      "@SpringBootTest",
      "@WebMvcTest",
      "@DataJpaTest",
      "@TestConfiguration"
    ],
    correct: 1,
    explanation: "@WebMvcTest loads only web layer components, making tests faster and more focused than full context tests with @SpringBootTest."
  },
  {
    id: 11,
    category: "Testing",
    question: "What is the recommended approach for testing database operations?",
    options: [
      "Use production database",
      "@DataJpaTest with H2 in-memory database",
      "Mock all database calls",
      "Integration tests only"
    ],
    correct: 1,
    explanation: "@DataJpaTest with in-memory databases provides fast, isolated tests without external dependencies while still testing actual JPA behavior."
  },
  {
    id: 12,
    category: "Logging",
    question: "What is the default logging framework in Spring Boot?",
    options: [
      "Log4j",
      "Logback",
      "Java Util Logging",
      "SLF4J"
    ],
    correct: 1,
    explanation: "Spring Boot uses Logback as the default logging implementation, with SLF4J as the logging facade."
  },
  {
    id: 13,
    category: "Logging",
    question: "How should you structure log levels in production?",
    options: [
      "DEBUG for everything",
      "INFO for business logic, ERROR for exceptions",
      "WARN for all messages",
      "No logging in production"
    ],
    correct: 1,
    explanation: "INFO level for normal business flow and ERROR for exceptions provides good balance between observability and performance."
  },
  {
    id: 14,
    category: "Performance",
    question: "What should you do to improve Spring Boot application startup time?",
    options: [
      "Use @Lazy annotation strategically",
      "Disable unnecessary auto-configurations",
      "Use spring-boot-devtools only in development",
      "All of the above"
    ],
    correct: 3,
    explanation: "All these practices help reduce startup time: lazy initialization, excluding unused auto-configurations, and proper dev tools usage."
  },
  {
    id: 15,
    category: "Performance",
    question: "How should you handle database connection pooling?",
    options: [
      "Use default settings always",
      "Configure HikariCP with appropriate pool size",
      "Create new connections for each request",
      "Use single connection for all requests"
    ],
    correct: 1,
    explanation: "HikariCP is the default connection pool in Spring Boot. Configure it based on your application's load and database capacity."
  },
  {
    id: 16,
    category: "Security",
    question: "What is the recommended way to implement authentication in Spring Boot?",
    options: [
      "Custom filters",
      "Spring Security with JWT or OAuth2",
      "Session-based authentication only",
      "Database authentication only"
    ],
    correct: 1,
    explanation: "Spring Security provides robust, tested authentication mechanisms. JWT and OAuth2 are modern standards for stateless authentication."
  },
  {
    id: 17,
    category: "Security",
    question: "How should you handle CORS in Spring Boot?",
    options: [
      "Disable CORS completely",
      "Use @CrossOrigin or global CORS configuration",
      "Handle in frontend only",
      "Use custom filters"
    ],
    correct: 1,
    explanation: "@CrossOrigin annotation or global CORS configuration provides proper CORS handling with fine-grained control over allowed origins and methods."
  },
  {
    id: 18,
    category: "Dependency Injection",
    question: "Which dependency injection method is recommended in Spring Boot?",
    options: [
      "Field injection with @Autowired",
      "Constructor injection",
      "Setter injection",
      "Interface injection"
    ],
    correct: 1,
    explanation: "Constructor injection is preferred as it ensures required dependencies are provided, enables immutable fields, and makes testing easier."
  },
  {
    id: 19,
    category: "Dependency Injection",
    question: "When should you use @Qualifier annotation?",
    options: [
      "Always with @Autowired",
      "When multiple beans of same type exist",
      "For performance optimization",
      "Only in test classes"
    ],
    correct: 1,
    explanation: "@Qualifier helps Spring identify which bean to inject when multiple beans of the same type are available in the context."
  },
  {
    id: 20,
    category: "Monitoring",
    question: "What is the recommended way to add monitoring to Spring Boot applications?",
    options: [
      "Custom metrics collection",
      "Spring Boot Actuator",
      "Third-party monitoring tools only",
      "Manual logging"
    ],
    correct: 1,
    explanation: "Spring Boot Actuator provides production-ready features like health checks, metrics, and application information out of the box."
  },
  {
    id: 21,
    dependency: "Actuator",
    question: "Which Actuator endpoints should be enabled in production?",
    options: [
      "All endpoints",
      "Only health and info",
      "None",
      "Only debug endpoints"
    ],
    correct: 1,
    explanation: "In production, only expose essential endpoints like health and info. Other endpoints may reveal sensitive information."
  },
  {
    id: 22,
    category: "Caching",
    question: "How should you implement caching in Spring Boot?",
    options: [
      "Manual cache management",
      "@Cacheable annotation with cache provider",
      "Static variables",
      "Database-level caching only"
    ],
    correct: 1,
    explanation: "@Cacheable with providers like Redis or Caffeine provides declarative caching with minimal code changes and proper cache management."
  },
  {
    id: 23,
    category: "Error Handling",
    question: "What should your REST API return for validation errors?",
    options: [
      "HTTP 500 Internal Server Error",
      "HTTP 400 Bad Request with error details",
      "HTTP 200 OK with error flag",
      "HTTP 404 Not Found"
    ],
    correct: 1,
    explanation: "HTTP 400 Bad Request is the correct status for client validation errors, with detailed error information in the response body."
  },
  {
    id: 24,
    category: "Profiles",
    question: "How should you organize Spring profiles?",
    options: [
      "One profile for everything",
      "Environment-specific profiles (dev, test, prod)",
      "Feature-based profiles only",
      "No profiles needed"
    ],
    correct: 1,
    explanation: "Environment-specific profiles allow different configurations for development, testing, and production environments."
  },
  {
    id: 25,
    category: "REST API",
    question: "What is the correct HTTP method for updating a resource?",
    options: [
      "GET",
      "POST",
      "PUT or PATCH",
      "DELETE"
    ],
    correct: 2,
    explanation: "PUT for complete resource replacement, PATCH for partial updates. Both are appropriate for updates depending on the use case."
  },
  {
    id: 26,
    category: "Data",
    question: "How should you handle transactions in Spring Boot?",
    options: [
      "Manual transaction management",
      "@Transactional annotation",
      "Database-level transactions only",
      "No transaction management"
    ],
    correct: 1,
    explanation: "@Transactional provides declarative transaction management with proper rollback handling and is the Spring recommended approach."
  },
  {
    id: 27,
    category: "Configuration",
    question: "Where should you place custom configuration properties?",
    options: [
      "In application.properties only",
      "Use @ConfigurationProperties with dedicated classes",
      "As static final variables",
      "In system properties"
    ],
    correct: 1,
    explanation: "@ConfigurationProperties provides type-safe configuration binding and better organization than scattered @Value annotations."
  },
  {
    id: 28,
    category: "Testing",
    question: "What is the best practice for testing configuration properties?",
    options: [
      "Don't test configuration",
      "@TestPropertySource for test-specific properties",
      "Hardcode test values",
      "Use production properties in tests"
    ],
    correct: 1,
    explanation: "@TestPropertySource allows you to override properties for tests, ensuring isolation and controlled test environments."
  },
  {
    id: 29,
    category: "Packaging",
    question: "What is the recommended packaging format for Spring Boot applications?",
    options: [
      "WAR files",
      "JAR files (fat/uber JAR)",
      "EAR files",
      "ZIP files"
    ],
    correct: 1,
    explanation: "Fat JARs include all dependencies and the embedded server, making deployment simple and consistent across environments."
  },
  {
    id: 30,
    category: "Development",
    question: "Which tool should you use for hot reloading during development?",
    options: [
      "JRebel",
      "Spring Boot DevTools",
      "Manual restarts",
      "IDE hot swap"
    ],
    correct: 1,
    explanation: "Spring Boot DevTools provides automatic restart, live reload, and other development-time features optimized for Spring Boot applications."
  },
  {
    id: 31,
    category: "Security",
    question: "How should you store API keys in Spring Boot?",
    options: [
      "In application.properties file",
      "Environment variables or external configuration",
      "Hardcoded in source code",
      "In the database"
    ],
    correct: 1,
    explanation: "API keys and secrets should be externalized using environment variables or secure configuration management systems."
  },
  {
    id: 32,
    category: "Data",
    question: "What is the recommended way to handle database schema updates?",
    options: [
      "Hibernate's ddl-auto=update",
      "Version-controlled migration scripts with Flyway/Liquibase",
      "Manual database changes",
      "Drop and recreate database"
    ],
    correct: 1,
    explanation: "Version-controlled migration scripts ensure consistent, trackable database changes across all environments."
  },
  {
    id: 33,
    category: "REST API",
    question: "How should you version your REST APIs?",
    options: [
      "No versioning needed",
      "URL path versioning (/api/v1/) or header versioning",
      "Query parameter versioning only",
      "Change existing endpoints"
    ],
    correct: 1,
    explanation: "API versioning ensures backward compatibility. URL path versioning is most common, though header versioning is also acceptable."
  },
  {
    id: 34,
    category: "Error Handling",
    question: "What should you include in error responses?",
    options: [
      "Full stack traces",
      "Error code, message, and timestamp",
      "Internal system details",
      "Database connection strings"
    ],
    correct: 1,
    explanation: "Error responses should be informative but not expose internal system details. Include error codes, user-friendly messages, and timestamps."
  },
  {
    id: 35,
    category: "Performance",
    question: "How should you handle large datasets in REST APIs?",
    options: [
      "Return all data at once",
      "Implement pagination with Page and Pageable",
      "Limit to first 100 records",
      "Use caching only"
    ],
    correct: 1,
    explanation: "Spring Data's Pageable interface provides standardized pagination, reducing memory usage and improving response times."
  },
  {
    id: 36,
    category: "Validation",
    question: "Where should you perform input validation?",
    options: [
      "Only in the frontend",
      "At the controller level with Bean Validation",
      "Only in the service layer",
      "Only in the database"
    ],
    correct: 1,
    explanation: "Controller-level validation with Bean Validation annotations provides early validation and consistent error handling."
  },
  {
    id: 37,
    category: "Logging",
    question: "What information should you log in production?",
    options: [
      "Every method call",
      "Business events, errors, and performance metrics",
      "User passwords and tokens",
      "Database queries only"
    ],
    correct: 1,
    explanation: "Log business-relevant events, errors, and performance metrics. Avoid logging sensitive data or excessive debug information."
  },
  {
    id: 38,
    category: "Architecture",
    question: "How should you organize your Spring Boot application packages?",
    options: [
      "All classes in one package",
      "By layer (controller, service, repository) or by feature",
      "Random organization",
      "Alphabetical organization"
    ],
    correct: 1,
    explanation: "Organize by layer (traditional) or by feature (domain-driven). Both approaches promote maintainability and clear separation of concerns."
  },
  {
    id: 39,
    category: "Testing",
    question: "What type of tests should you write most of?",
    options: [
      "Integration tests",
      "Unit tests",
      "End-to-end tests",
      "Manual tests"
    ],
    correct: 1,
    explanation: "Following the test pyramid, unit tests should be the majority as they're fast, isolated, and provide quick feedback on code changes."
  },
  {
    id: 40,
    category: "Configuration",
    question: "How should you handle different database configurations across environments?",
    options: [
      "Separate application.properties files",
      "Spring profiles with environment-specific configurations",
      "Hardcode different configurations",
      "Single configuration for all environments"
    ],
    correct: 1,
    explanation: "Spring profiles allow environment-specific configurations while maintaining a single codebase."
  },
  {
    id: 41,
    category: "Security",
    question: "What is the principle of least privilege in Spring Security?",
    options: [
      "Give all users admin access",
      "Grant minimum necessary permissions for each role",
      "No access control needed",
      "All endpoints should be public"
    ],
    correct: 1,
    explanation: "Users should have only the minimum permissions necessary to perform their job functions, reducing security risks."
  },
  {
    id: 42,
    category: "Data",
    question: "How should you handle database connection pools?",
    options: [
      "Create new connections for each request",
      "Configure connection pool size based on load and database capacity",
      "Use unlimited connections",
      "Single connection for entire application"
    ],
    correct: 1,
    explanation: "Proper connection pool sizing prevents resource exhaustion while ensuring adequate database connectivity under load."
  },
  {
    id: 43,
    category: "Microservices",
    question: "How should Spring Boot microservices communicate?",
    options: [
      "Direct database access",
      "REST APIs, messaging, or service mesh",
      "Shared memory",
      "File system"
    ],
    correct: 1,
    explanation: "Microservices should communicate through well-defined interfaces like REST APIs, asynchronous messaging, or service mesh technologies."
  },
  {
    id: 44,
    category: "Deployment",
    question: "What is the recommended approach for containerizing Spring Boot applications?",
    options: [
      "Large base images with full OS",
      "Multi-stage Docker builds with minimal base images",
      "No containerization",
      "Include development tools in production images"
    ],
    correct: 1,
    explanation: "Multi-stage builds create smaller, more secure images by separating build and runtime environments."
  },
  {
    id: 45,
    category: "Monitoring",
    question: "What metrics should you monitor in Spring Boot applications?",
    options: [
      "Only application logs",
      "JVM metrics, HTTP metrics, custom business metrics",
      "Database size only",
      "No monitoring needed"
    ],
    correct: 1,
    explanation: "Comprehensive monitoring includes JVM health, HTTP request metrics, and business-specific metrics for full observability."
  },
  {
    id: 46,
    category: "Caching",
    question: "When should you implement caching?",
    options: [
      "For all operations",
      "For expensive computations and frequently accessed data",
      "Never cache anything",
      "Only for database queries"
    ],
    correct: 1,
    explanation: "Cache expensive operations and frequently accessed, relatively static data to improve performance and reduce load."
  },
  {
    id: 47,
    category: "Exception Handling",
    question: "How should you handle checked exceptions in Spring Boot?",
    options: [
      "Catch and ignore them",
      "Convert to unchecked exceptions with proper context",
      "Propagate all checked exceptions",
      "Use only RuntimeExceptions"
    ],
    correct: 1,
    explanation: "Convert checked exceptions to unchecked ones with additional context, allowing for cleaner code and consistent error handling."
  },
  {
    id: 48,
    category: "Performance",
    question: "How should you handle async processing in Spring Boot?",
    options: [
      "Block all operations",
      "Use @Async annotation or reactive programming",
      "Create manual threads",
      "Avoid async processing"
    ],
    correct: 1,
    explanation: "@Async annotation or reactive programming (WebFlux) provides proper async handling with Spring's thread management."
  },
  {
    id: 49,
    category: "Documentation",
    question: "How should you document your REST APIs?",
    options: [
      "No documentation needed",
      "Use OpenAPI/Swagger annotations",
      "Only code comments",
      "Separate Word documents"
    ],
    correct: 1,
    explanation: "OpenAPI/Swagger provides interactive, up-to-date API documentation that can be generated from code annotations."
  },
  {
    id: 50,
    category: "Testing",
    question: "How should you test external API integrations?",
    options: [
      "Always call real external APIs",
      "Use WireMock or TestContainers for integration testing",
      "Skip testing external integrations",
      "Only unit test the integration code"
    ],
    correct: 1,
    explanation: "Mock external services using tools like WireMock for reliable, fast tests that don't depend on external service availability."
  },
  // Continue with more questions...
  {
    id: 51,
    category: "Data",
    question: "What is the recommended approach for handling soft deletes?",
    options: [
      "Physical deletion only",
      "Add deleted flag and filter in queries",
      "Move to archive tables",
      "Never delete data"
    ],
    correct: 1,
    explanation: "Soft deletes using a boolean flag preserve data for audit purposes while logically removing records from normal operations."
  },
  {
    id: 52,
    category: "Security",
    question: "How should you implement rate limiting in Spring Boot?",
    options: [
      "No rate limiting needed",
      "Use Spring Security or custom filters with Redis/database",
      "Frontend rate limiting only",
      "Web server rate limiting only"
    ],
    correct: 1,
    explanation: "Application-level rate limiting provides fine-grained control and can be implemented using filters with backing stores like Redis."
  },
  {
    id: 53,
    category: "Configuration",
    question: "How should you handle feature flags in Spring Boot?",
    options: [
      "Hardcode feature switches",
      "Use @ConditionalOnProperty or external feature flag services",
      "Comment/uncomment code",
      "Separate deployments for features"
    ],
    correct: 1,
    explanation: "@ConditionalOnProperty allows configuration-driven feature enabling, while external services provide runtime feature toggle capabilities."
  },
  {
    id: 54,
    category: "Performance",
    question: "How should you optimize Spring Boot application memory usage?",
    options: [
      "Increase heap size only",
      "Profile application, optimize object creation, use appropriate data structures",
      "Disable garbage collection",
      "Use only static variables"
    ],
    correct: 1,
    explanation: "Memory optimization requires profiling to identify bottlenecks, minimizing object creation, and choosing appropriate data structures."
  },
  {
    id: 55,
    category: "Testing",
    question: "What is the best practice for testing scheduled tasks?",
    options: [
      "Wait for actual schedule execution",
      "Test business logic separately and verify scheduling configuration",
      "Skip testing scheduled tasks",
      "Use sleep() in tests"
    ],
    correct: 1,
    explanation: "Test the business logic of scheduled methods independently and verify scheduling configuration separately for faster, more reliable tests."
  },
  {
    id: 56,
    category: "Logging",
    question: "How should you implement structured logging?",
    options: [
      "Plain text logs only",
      "JSON formatted logs with consistent fields",
      "CSV format logs",
      "Binary log format"
    ],
    correct: 1,
    explanation: "JSON structured logging enables better log parsing, searching, and analysis in centralized logging systems."
  },
  {
    id: 57,
    category: "Architecture",
    question: "How should you handle cross-cutting concerns in Spring Boot?",
    options: [
      "Duplicate code in each class",
      "Use Spring AOP (Aspect-Oriented Programming)",
      "Inheritance only",
      "Static utility classes"
    ],
    correct: 1,
    explanation: "Spring AOP provides clean separation of cross-cutting concerns like logging, security, and caching without code duplication."
  },
  {
    id: 58,
    category: "Data",
    question: "What is the best practice for handling database transactions across multiple tables?",
    options: [
      "Separate transactions for each table",
      "Single @Transactional method encompassing all operations",
      "No transaction management",
      "Manual transaction handling"
    ],
    correct: 1,
    explanation: "A single transaction ensures ACID properties across multiple table operations, maintaining data consistency."
  },
  {
    id: 59,
    category: "REST API",
    question: "How should you handle bulk operations in REST APIs?",
    options: [
      "Individual requests for each item",
      "Batch endpoints that process multiple items",
      "No bulk operations",
      "Use GET for bulk operations"
    ],
    correct: 1,
    explanation: "Batch endpoints reduce network overhead and improve performance for bulk operations while maintaining RESTful principles."
  },
  {
    id: 60,
    category: "Security",
    question: "How should you implement input sanitization?",
    options: [
      "Trust all input",
      "Validate and sanitize all input at entry points",
      "Sanitize only in the database",
      "Frontend sanitization only"
    ],
    correct: 1,
    explanation: "Input validation and sanitization at application entry points prevent injection attacks and ensure data integrity."
  },
  {
    id: 61,
    category: "Configuration",
    question: "How should you handle configuration changes without restarting?",
    options: [
      "Always restart the application",
      "Use @RefreshScope with Spring Cloud Config",
      "Hardcode configuration values",
      "File system monitoring only"
    ],
    correct: 1,
    explanation: "@RefreshScope allows configuration refresh at runtime, enabling dynamic configuration updates without service interruption."
  },
  {
    id: 62,
    category: "Testing",
    question: "How should you test file upload functionality?",
    options: [
      "Skip testing file uploads",
      "Use MockMultipartFile in tests",
      "Upload real files in tests",
      "Only test the upload UI"
    ],
    correct: 1,
    explanation: "MockMultipartFile allows testing file upload logic without actual file system operations, making tests faster and more reliable."
  },
  {
    id: 63,
    category: "Performance",
    question: "How should you implement response compression?",
    options: [
      "No compression needed",
      "Enable GZIP compression for responses",
      "Client-side compression only",
      "Compress only images"
    ],
    correct: 1,
    explanation: "GZIP compression significantly reduces response size for text-based content, improving application performance."
  },
  {
    id: 64,
    category: "Monitoring",
    question: "How should you implement health checks?",
    options: [
      "No health checks needed",
      "Use Spring Boot Actuator health indicators",
      "Simple ping endpoint only",
      "Database connectivity check only"
    ],
    correct: 1,
    explanation: "Spring Boot Actuator provides comprehensive health checks including database, disk space, and custom health indicators."
  },
  {
    id: 65,
    category: "Data",
    question: "How should you handle optimistic locking conflicts?",
    options: [
      "Ignore version conflicts",
      "Implement retry logic with exponential backoff",
      "Always use pessimistic locking",
      "Convert to runtime exceptions"
    ],
    correct: 1,
    explanation: "Retry logic with exponential backoff handles temporary conflicts gracefully while preventing infinite retry loops."
  },
  {
    id: 66,
    category: "Security",
    question: "How should you implement audit logging?",
    options: [
      "Manual logging in each method",
      "Use Spring Data JPA auditing or AOP",
      "No audit logging needed",
      "Database triggers only"
    ],
    correct: 1,
    explanation: "Spring Data JPA auditing annotations or AOP provide automatic, consistent audit logging without manual code in each method."
  },
  {
    id: 67,
    category: "Architecture",
    question: "How should you handle service-to-service communication?",
    options: [
      "Direct database access",
      "REST APIs with proper error handling and timeouts",
      "Shared file system",
      "Static method calls"
    ],
    correct: 1,
    explanation: "REST APIs with proper error handling, timeouts, and circuit breakers provide resilient service communication."
  },
  {
    id: 68,
    category: "Testing",
    question: "How should you test database repositories?",
    options: [
      "Test against production database",
      "Use @DataJpaTest with test database",
      "Mock all repository methods",
      "No testing needed for repositories"
    ],
    correct: 1,
    explanation: "@DataJpaTest provides a test slice that loads only JPA-related components and uses a test database for fast, isolated testing."
  },
  {
    id: 69,
    category: "Performance",
    question: "How should you handle large file uploads?",
    options: [
      "Load entire file into memory",
      "Stream processing with temporary storage",
      "Reject all large files",
      "Client-side processing only"
    ],
    correct: 1,
    explanation: "Streaming large files prevents memory overflow and allows processing of files larger than available heap memory."
  },
  {
    id: 70,
    category: "Configuration",
    question: "How should you handle environment-specific beans?",
    options: [
      "Same beans for all environments",
      "Use @Profile annotation on bean definitions",
      "Hardcode environment checks",
      "Separate applications for each environment"
    ],
    correct: 1,
    explanation: "@Profile allows conditional bean creation based on active profiles, enabling environment-specific configurations."
  },
  {
    id: 71,
    category: "REST API",
    question: "How should you implement API request/response logging?",
    options: [
      "Log in every controller method",
      "Use servlet filters or interceptors",
      "No request logging needed",
      "Frontend logging only"
    ],
    correct: 1,
    explanation: "Servlet filters or Spring interceptors provide centralized request/response logging without modifying individual controller methods."
  },
  {
    id: 72,
    category: "Data",
    question: "How should you handle database connection timeouts?",
    options: [
      "Use default timeout values",
      "Configure appropriate timeouts based on usage patterns",
      "No timeout configuration",
      "Infinite timeouts"
    ],
    correct: 1,
    explanation: "Configure connection, read, and query timeouts based on expected response times to prevent resource exhaustion."
  },
  {
    id: 73,
    category: "Security",
    question: "How should you implement session management?",
    options: [
      "Store everything in sessions",
      "Stateless authentication with JWT or database sessions",
      "Client-side session storage",
      "No session management"
    ],
    correct: 1,
    explanation: "Stateless authentication or proper session management with appropriate timeouts and security measures prevent session-related vulnerabilities."
  },
  {
    id: 74,
    category: "Testing",
    question: "How should you test email functionality?",
    options: [
      "Send real emails in tests",
      "Use GreenMail or mock email services",
      "Skip email testing",
      "Test only email templates"
    ],
    correct: 1,
    explanation: "Mock email services like GreenMail allow testing email functionality without sending actual emails or requiring external SMTP servers."
  },
  {
    id: 75,
    category: "Performance",
    question: "How should you implement connection pooling for external services?",
    options: [
      "Create new connections for each request",
      "Use HTTP client connection pooling",
      "Single connection for all requests",
      "No connection management"
    ],
    correct: 1,
    explanation: "HTTP client connection pooling reuses connections to external services, reducing overhead and improving performance."
  },
  {
    id: 76,
    category: "Validation",
    question: "How should you handle complex validation scenarios?",
    options: [
      "Simple field validation only",
      "Custom validators and cross-field validation",
      "No validation needed",
      "Frontend validation only"
    ],
    correct: 1,
    explanation: "Custom validators allow complex business rule validation while maintaining the declarative validation approach."
  },
  {
    id: 77,
    category: "Architecture",
    question: "How should you handle code reusability across projects?",
    options: [
      "Copy-paste code",
      "Create shared libraries and starter modules",
      "No code reuse",
      "Single monolithic project"
    ],
    correct: 1,
    explanation: "Shared libraries and Spring Boot starter modules promote code reuse while maintaining proper dependency management."
  },
  {
    id: 78,
    category: "Data",
    question: "How should you handle data encryption at rest?",
    options: [
      "No encryption needed",
      "Database-level encryption and application-level for sensitive fields",
      "Application-level encryption only",
      "File system encryption only"
    ],
    correct: 1,
    explanation: "Multiple layers of encryption provide defense in depth for sensitive data protection."
  },
  {
    id: 79,
    category: "Monitoring",
    question: "How should you implement application performance monitoring?",
    options: [
      "No performance monitoring",
      "Use APM tools with Spring Boot Actuator metrics",
      "Manual performance logging only",
      "Database performance monitoring only"
    ],
    correct: 1,
    explanation: "APM tools integrated with Spring Boot Actuator provide comprehensive performance monitoring and alerting capabilities."
  },
  {
    id: 80,
    category: "Configuration",
    question: "How should you manage configuration drift across environments?",
    options: [
      "Manual configuration management",
      "Infrastructure as Code and configuration management tools",
      "No configuration management",
      "Single configuration for all environments"
    ],
    correct: 1,
    explanation: "Infrastructure as Code ensures consistent configuration across environments and prevents configuration drift."
  },
  {
    id: 81,
    category: "Security",
    question: "How should you implement password policies?",
    options: [
      "No password requirements",
      "Strong password validation with complexity rules",
      "Simple password validation only",
      "Client-side validation only"
    ],
    correct: 1,
    explanation: "Server-side password validation with appropriate complexity rules helps ensure account security."
  },
  {
    id: 82,
    category: "Testing",
    question: "How should you test cache functionality?",
    options: [
      "No cache testing needed",
      "Verify cache hits/misses and eviction policies",
      "Test only cache configuration",
      "Manual cache testing only"
    ],
    correct: 1,
    explanation: "Cache testing should verify that caching works correctly, including hit/miss scenarios and proper eviction behavior."
  },
  {
    id: 83,
    category: "Performance",
    question: "How should you handle memory leaks in Spring Boot applications?",
    options: [
      "Ignore memory leaks",
      "Profile application and fix resource leaks",
      "Restart application periodically",
      "Increase heap size only"
    ],
    correct: 1,
    explanation: "Proactive profiling and proper resource management (try-with-resources, proper connection handling) prevent memory leaks."
  },
  {
    id: 84,
    category: "Data",
    question: "How should you implement database indexing strategy?",
    options: [
      "Index all columns",
      "Index based on query patterns and performance analysis",
      "No indexes needed",
      "Primary key indexes only"
    ],
    correct: 1,
    explanation: "Indexing should be based on actual query patterns and performance analysis to balance query speed with write performance."
  },
  {
    id: 85,
    category: "REST API",
    question: "How should you handle API deprecation?",
    options: [
      "Remove APIs immediately",
      "Version APIs and provide deprecation timeline",
      "No API versioning needed",
      "Change existing APIs without notice"
    ],
    correct: 1,
    explanation: "API versioning with clear deprecation timelines allows clients to migrate gracefully without breaking existing integrations."
  },
  {
    id: 86,
    category: "Architecture",
    question: "How should you implement event-driven architecture?",
    options: [
      "Synchronous method calls only",
      "Application events or message queues",
      "Database polling",
      "File system notifications"
    ],
    correct: 1,
    explanation: "Spring Application Events or message queues (RabbitMQ, Kafka) provide decoupled, scalable event-driven communication."
  },
  {
    id: 87,
    category: "Security",
    question: "How should you handle API authentication for mobile apps?",
    options: [
      "Basic authentication",
      "OAuth2 with refresh tokens",
      "No authentication needed",
      "Username/password in each request"
    ],
    correct: 1,
    explanation: "OAuth2 with refresh tokens provides secure authentication for mobile applications with appropriate token lifecycle management."
  },
  {
    id: 88,
    category: "Testing",
    question: "How should you test exception handling?",
    options: [
      "Don't test exception scenarios",
      "Test both happy path and exception scenarios",
      "Test only happy path",
      "Test only exception scenarios"
    ],
    correct: 1,
    explanation: "Comprehensive testing includes both successful operations and various exception scenarios to ensure robust error handling."
  },
  {
    id: 89,
    category: "Performance",
    question: "How should you implement response caching?",
    options: [
      "No response caching",
      "HTTP cache headers and application-level caching",
      "Client-side caching only",
      "Database query caching only"
    ],
    correct: 1,
    explanation: "Proper HTTP cache headers combined with application-level caching reduces server load and improves response times."
  },
  {
    id: 90,
    category: "Configuration",
    question: "How should you handle configuration validation?",
    options: [
      "No configuration validation",
      "Validate configuration on startup",
      "Runtime configuration validation only",
      "Manual configuration checking"
    ],
    correct: 1,
    explanation: "Startup configuration validation using @ConfigurationProperties validation prevents runtime errors due to misconfiguration."
  },
  {
    id: 91,
    category: "Data",
    question: "How should you handle concurrent data modifications?",
    options: [
      "Ignore concurrency issues",
      "Implement optimistic or pessimistic locking",
      "Sequential processing only",
      "Client-side conflict resolution"
    ],
    correct: 1,
    explanation: "Proper locking strategies prevent data corruption and maintain consistency in concurrent environments."
  },
  {
    id: 92,
    category: "Logging",
    question: "How should you implement log aggregation?",
    options: [
      "Local file logging only",
      "Centralized logging with ELK stack or similar",
      "Database logging only",
      "No log aggregation needed"
    ],
    correct: 1,
    explanation: "Centralized logging enables better monitoring, debugging, and analysis across distributed applications."
  },
  {
    id: 93,
    category: "Security",
    question: "How should you implement request rate limiting per user?",
    options: [
      "No per-user rate limiting",
      "User-based rate limiting with Redis or database",
      "Global rate limiting only",
      "Client-side rate limiting"
    ],
    correct: 1,
    explanation: "Per-user rate limiting prevents abuse while allowing legitimate users normal access to the application."
  },
  {
    id: 94,
    category: "Testing",
    question: "How should you test asynchronous operations?",
    options: [
      "Use sleep() in tests",
      "Use Awaitility or CompletableFuture testing",
      "Skip testing async operations",
      "Convert to synchronous for testing"
    ],
    correct: 1,
    explanation: "Proper async testing libraries like Awaitility provide reliable testing of asynchronous operations without arbitrary delays."
  },
  {
    id: 95,
    category: "Performance",
    question: "How should you optimize database queries?",
    options: [
      "Add indexes to all columns",
      "Analyze query execution plans and optimize accordingly",
      "Use only simple queries",
      "Cache all query results"
    ],
    correct: 1,
    explanation: "Query optimization should be based on execution plan analysis, identifying bottlenecks and applying appropriate optimizations."
  },
  {
    id: 96,
    category: "Architecture",
    question: "How should you implement circuit breaker pattern?",
    options: [
      "No circuit breaker needed",
      "Use Resilience4j or Hystrix",
      "Manual timeout handling only",
      "Ignore external service failures"
    ],
    correct: 1,
    explanation: "Circuit breakers prevent cascading failures by detecting and handling external service failures gracefully."
  },
  {
    id: 97,
    category: "Data",
    question: "How should you handle data migration in production?",
    options: [
      "Direct database changes",
      "Blue-green deployment with migration scripts",
      "Ignore data migration",
      "Manual data updates"
    ],
    correct: 1,
    explanation: "Blue-green deployments with proper migration scripts ensure zero-downtime deployments with data consistency."
  },
  {
    id: 98,
    category: "Monitoring",
    question: "How should you implement custom metrics?",
    options: [
      "No custom metrics needed",
      "Use Micrometer with custom meters",
      "Log-based metrics only",
      "Database-based metrics tracking"
    ],
    correct: 1,
    explanation: "Micrometer provides standardized metrics collection that can be exported to various monitoring systems."
  },
  {
    id: 99,
    category: "Security",
    question: "How should you handle file upload security?",
    options: [
      "Accept all file types",
      "Validate file types, size, and scan for malware",
      "Client-side validation only",
      "No file upload security needed"
    ],
    correct: 1,
    explanation: "Comprehensive file upload security includes type validation, size limits, and malware scanning to prevent security breaches."
  },
  {
    id: 100,
    category: "Configuration",
    question: "How should you handle database connection configuration?",
    options: [
      "Hardcode connection details",
      "Externalize connection configuration with environment variables",
      "Single connection configuration for all environments",
      "No connection configuration needed"
    ],
    correct: 1,
    explanation: "External configuration allows different database connections per environment without code changes."
  },
  // Continue with questions 101-200...
  {
    id: 101,
    category: "Performance",
    question: "What is the recommended approach for handling long-running operations?",
    options: [
      "Block the request thread",
      "Use async processing with @Async or message queues",
      "Increase request timeout",
      "Process on the client side"
    ],
    correct: 1,
    explanation: "Async processing prevents thread pool exhaustion and improves application responsiveness for long-running operations."
  },
  {
    id: 102,
    category: "Data",
    question: "How should you implement soft delete with JPA?",
    options: [
      "Manual WHERE clauses in all queries",
      "Use @SQLDelete and @Where annotations",
      "Physical deletion only",
      "Separate deleted records table"
    ],
    correct: 1,
    explanation: "@SQLDelete and @Where annotations provide automatic soft delete functionality without manual query modifications."
  },
  {
    id: 103,
    category: "REST API",
    question: "How should you handle partial resource updates?",
    options: [
      "PUT with full resource",
      "PATCH with only changed fields",
      "POST for all updates",
      "GET with query parameters"
    ],
    correct: 1,
    explanation: "PATCH allows partial updates, reducing bandwidth and preventing unintended overwrites of unchanged fields."
  },
  {
    id: 104,
    category: "Security",
    question: "How should you implement password reset functionality?",
    options: [
      "Email password directly",
      "Generate secure token with expiration",
      "Use security questions only",
      "No password reset needed"
    ],
    correct: 1,
    explanation: "Secure tokens with expiration dates provide safe password reset without exposing actual passwords."
  },
  {
    id: 105,
    category: "Testing",
    question: "How should you test security configurations?",
    options: [
      "No security testing needed",
      "Use @WithMockUser and security test slices",
      "Manual security testing only",
      "Test in production only"
    ],
    correct: 1,
    explanation: "@WithMockUser and Spring Security test annotations allow automated testing of security configurations and access controls."
  },
  {
    id: 106,
    category: "Architecture",
    question: "How should you structure a multi-module Spring Boot project?",
    options: [
      "Single module for everything",
      "Separate modules by layer or domain",
      "Random module organization",
      "No modules needed"
    ],
    correct: 1,
    explanation: "Multi-module structure by layer or domain promotes separation of concerns and enables better code organization and reusability."
  },
  {
    id: 107,
    category: "Configuration",
    question: "How should you implement feature toggles?",
    options: [
      "Hardcode boolean flags",
      "@ConditionalOnProperty or feature flag services",
      "Comment out code",
      "Separate deployments"
    ],
    correct: 1,
    explanation: "Configuration-driven feature toggles allow runtime feature control without code changes or redeployments."
  },
  {
    id: 108,
    category: "Performance",
    question: "How should you handle static resource caching?",
    options: [
      "No caching for static resources",
      "Configure cache headers and versioning",
      "Server-side caching only",
      "Database caching for static files"
    ],
    correct: 1,
    explanation: "Proper cache headers with versioning strategies enable effective browser caching of static resources."
  },
  {
    id: 109,
    category: "Data",
    question: "How should you handle database schema evolution?",
    options: [
      "Manual schema changes",
      "Version-controlled migration scripts",
      "Drop and recreate database",
      "No schema versioning"
    ],
    correct: 1,
    explanation: "Version-controlled migrations ensure consistent schema evolution across all environments with rollback capabilities."
  },
  {
    id: 110,
    category: "Monitoring",
    question: "What should you monitor for database performance?",
    options: [
      "Nothing specific",
      "Connection pool metrics, query performance, deadlocks",
      "Table sizes only",
      "User access patterns only"
    ],
    correct: 1,
    explanation: "Comprehensive database monitoring includes connection health, query performance, and concurrency issues."
  },
  {
    id: 111,
    category: "Security",
    question: "How should you implement account lockout policies?",
    options: [
      "No account lockout needed",
      "Temporary lockout after failed attempts with exponential backoff",
      "Permanent account lockout",
      "Client-side lockout only"
    ],
    correct: 1,
    explanation: "Temporary lockout with exponential backoff prevents brute force attacks while allowing legitimate users to regain access."
  },
  {
    id: 112,
    category: "Testing",
    question: "How should you test message-driven components?",
    options: [
      "Skip testing message components",
      "Use embedded message brokers or test containers",
      "Test against production message queues",
      "Mock all message interactions"
    ],
    correct: 1,
    explanation: "Embedded brokers or test containers provide realistic testing environments without external dependencies."
  },
  {
    id: 113,
    category: "Performance",
    question: "How should you implement request throttling?",
    options: [
      "No request throttling",
      "Implement rate limiting per endpoint or user",
      "Global request limiting only",
      "Client-side throttling only"
    ],
    correct: 1,
    explanation: "Granular rate limiting protects specific endpoints from overload while maintaining overall application performance."
  },
  {
    id: 114,
    category: "Architecture",
    question: "How should you handle distributed transactions?",
    options: [
      "Avoid distributed transactions when possible",
      "Use saga pattern or eventual consistency",
      "Two-phase commit for everything",
      "No transaction management in distributed systems"
    ],
    correct: 1,
    explanation: "Saga pattern and eventual consistency provide better scalability and fault tolerance than traditional distributed transactions."
  },
  {
    id: 115,
    category: "Data",
    question: "How should you implement data validation at the database level?",
    options: [
      "Application validation only",
      "Database constraints combined with application validation",
      "Database validation only",
      "No database-level validation"
    ],
    correct: 1,
    explanation: "Database constraints provide data integrity safeguards while application validation provides user-friendly error messages."
  },
  {
    id: 116,
    category: "Configuration",
    question: "How should you handle sensitive configuration in containers?",
    options: [
      "Include in Docker image",
      "Use secrets management and environment variables",
      "Mount configuration files",
      "Hardcode in application"
    ],
    correct: 1,
    explanation: "Secrets management systems and environment variables keep sensitive data separate from container images."
  },
  {
    id: 117,
    category: "REST API",
    question: "How should you implement API filtering and sorting?",
    options: [
      "No filtering or sorting",
      "Query parameters with validation",
      "POST body for filter criteria",
      "Separate endpoints for each filter"
    ],
    correct: 1,
    explanation: "Query parameters provide RESTful filtering and sorting while maintaining cacheable GET requests."
  },
  {
    id: 118,
    category: "Security",
    question: "How should you implement Cross-Site Request Forgery (CSRF) protection?",
    options: [
      "No CSRF protection needed",
      "Enable CSRF tokens for state-changing operations",
      "CSRF protection for all endpoints",
      "Client-side CSRF protection only"
    ],
    correct: 1,
    explanation: "CSRF tokens for state-changing operations protect against unauthorized actions while allowing legitimate requests."
  },
  {
    id: 119,
    category: "Testing",
    question: "How should you organize test data?",
    options: [
      "Random test data generation",
      "Controlled test data with builders or fixtures",
      "Production data copies",
      "No specific test data strategy"
    ],
    correct: 1,
    explanation: "Controlled test data using builders or fixtures ensures predictable test outcomes and easier test maintenance."
  },
  {
    id: 120,
    category: "Performance",
    question: "How should you handle connection pooling for external services?",
    options: [
      "Single connection per request",
      "Configure connection pools based on usage patterns",
      "Unlimited connections",
      "No connection management"
    ],
    correct: 1,
    explanation: "Properly configured connection pools optimize resource usage while preventing connection exhaustion."
  },
  {
    id: 121,
    category: "Logging",
    question: "How should you implement correlation IDs for request tracing?",
    options: [
      "No request tracing needed",
      "Generate correlation IDs and propagate through call chain",
      "Use timestamps for correlation",
      "Database-based request tracking"
    ],
    correct: 1,
    explanation: "Correlation IDs enable tracking requests through distributed systems and microservices architectures."
  },
  {
    id: 122,
    category: "Data",
    question: "How should you handle database failover?",
    options: [
      "Single database instance only",
      "Configure multiple data sources with failover logic",
      "Manual database switching",
      "No failover strategy"
    ],
    correct: 1,
    explanation: "Automatic failover mechanisms ensure high availability by switching to backup databases when primary fails."
  },
  {
    id: 123,
    category: "Architecture",
    question: "How should you implement health checks for dependencies?",
    options: [
      "No dependency health checks",
      "Custom health indicators for external services",
      "Ping endpoints only",
      "Application startup checks only"
    ],
    correct: 1,
    explanation: "Custom health indicators provide comprehensive dependency monitoring for better operational visibility."
  },
  {
    id: 124,
    category: "Security",
    question: "How should you handle API key management?",
    options: [
      "Store API keys in code",
      "External secret management with rotation",
      "Database storage for API keys",
      "Client-side API key storage"
    ],
    correct: 1,
    explanation: "External secret management with automatic rotation provides secure API key lifecycle management."
  },
  {
    id: 125,
    category: "Testing",
    question: "How should you test configuration properties?",
    options: [
      "No configuration testing needed",
      "@TestPropertySource and property validation tests",
      "Manual configuration testing",
      "Production configuration testing only"
    ],
    correct: 1,
    explanation: "Configuration testing ensures proper binding and validation of application properties across environments."
  },
  {
    id: 126,
    category: "Performance",
    question: "How should you implement graceful degradation?",
    options: [
      "Fail completely when issues occur",
      "Provide reduced functionality when dependencies fail",
      "Ignore dependency failures",
      "No degradation strategy needed"
    ],
    correct: 1,
    explanation: "Graceful degradation maintains core functionality even when non-critical dependencies are unavailable."
  },
  {
    id: 127,
    category: "Configuration",
    question: "How should you handle configuration precedence?",
    options: [
      "Single configuration source only",
      "Define clear precedence order for configuration sources",
      "Random configuration precedence",
      "No configuration precedence needed"
    ],
    correct: 1,
    explanation: "Clear precedence order (environment variables > properties files > defaults) prevents configuration conflicts."
  },
  {
    id: 128,
    category: "Data",
    question: "How should you implement data archiving?",
    options: [
      "Never archive data",
      "Automated archiving based on age or size policies",
      "Manual data archiving only",
      "Delete old data instead of archiving"
    ],
    correct: 1,
    explanation: "Automated archiving policies maintain database performance while preserving historical data for compliance."
  },
  {
    id: 129,
    category: "REST API",
    question: "How should you implement API rate limiting headers?",
    options: [
      "No rate limiting headers",
      "Include X-RateLimit headers in responses",
      "Rate limiting information in response body only",
      "Client-side rate limit tracking"
    ],
    correct: 1,
    explanation: "Standard rate limiting headers inform clients about their usage limits and remaining quota."
  },
  {
    id: 130,
    category: "Security",
    question: "How should you implement input validation for SQL injection prevention?",
    options: [
      "String concatenation is fine",
      "Use parameterized queries and input validation",
      "Client-side validation only",
      "No special SQL injection prevention needed"
    ],
    correct: 1,
    explanation: "Parameterized queries and input validation are essential defenses against SQL injection attacks."
  },
  {
    id: 131,
    category: "Testing",
    question: "How should you test time-dependent functionality?",
    options: [
      "Use system clock in tests",
      "Mock clock or use Clock abstraction",
      "Skip testing time-dependent code",
      "Wait for actual time to pass"
    ],
    correct: 1,
    explanation: "Clock abstraction and mocking enable predictable testing of time-dependent functionality without waiting."
  },
  {
    id: 132,
    category: "Performance",
    question: "How should you handle memory-intensive operations?",
    options: [
      "Load everything into memory",
      "Use streaming and pagination for large datasets",
      "Increase heap size indefinitely",
      "Process everything synchronously"
    ],
    correct: 1,
    explanation: "Streaming and pagination prevent memory exhaustion when processing large datasets."
  },
  {
    id: 133,
    category: "Architecture",
    question: "How should you implement retry mechanisms?",
    options: [
      "No retry mechanisms needed",
      "Exponential backoff with jitter and circuit breakers",
      "Fixed interval retries only",
      "Infinite retries"
    ],
    correct: 1,
    explanation: "Exponential backoff with jitter and circuit breakers provide resilient retry patterns without overwhelming failing services."
  },
  {
    id: 134,
    category: "Data",
    question: "How should you handle database connection leaks?",
    options: [
      "Ignore connection leaks",
      "Proper connection lifecycle management and monitoring",
      "Restart application periodically",
      "Increase connection pool size only"
    ],
    correct: 1,
    explanation: "Proper resource management using try-with-resources and connection monitoring prevents connection leaks."
  },
  {
    id: 135,
    category: "Configuration",
    question: "How should you implement configuration refresh?",
    options: [
      "Application restart for configuration changes",
      "Use @RefreshScope and configuration management",
      "Manual configuration reload only",
      "No configuration refresh capability"
    ],
    correct: 1,
    explanation: "@RefreshScope enables runtime configuration updates without service interruption."
  },
  {
    id: 136,
    category: "Security",
    question: "How should you implement content security policies?",
    options: [
      "No content security needed",
      "Implement CSP headers and validation",
      "Client-side security only",
      "Server-side filtering only"
    ],
    correct: 1,
    explanation: "Content Security Policy headers provide defense against XSS and data injection attacks."
  },
  {
    id: 137,
    category: "Testing",
    question: "How should you test external service integrations?",
    options: [
      "Always test against real services",
      "Use contract testing and service virtualization",
      "Skip integration testing",
      "Mock everything manually"
    ],
    correct: 1,
    explanation: "Contract testing and service virtualization ensure reliable integration testing without external dependencies."
  },
  {
    id: 138,
    category: "Performance",
    question: "How should you implement request/response compression?",
    options: [
      "No compression needed",
      "Enable GZIP compression for appropriate content types",
      "Compress all responses regardless of size",
      "Client-side compression only"
    ],
    correct: 1,
    explanation: "Selective GZIP compression reduces bandwidth usage while avoiding compression overhead for small responses."
  },
  {
    id: 139,
    category: "Monitoring",
    question: "How should you implement distributed tracing?",
    options: [
      "No distributed tracing needed",
      "Use Spring Cloud Sleuth or OpenTracing",
      "Custom trace correlation only",
      "Log aggregation only"
    ],
    correct: 1,
    explanation: "Distributed tracing tools provide end-to-end request visibility across microservices architectures."
  },
  {
    id: 140,
    category: "Data",
    question: "How should you handle database deadlocks?",
    options: [
      "Ignore deadlock errors",
      "Implement deadlock detection and retry logic",
      "Use only single-table operations",
      "Increase lock timeout only"
    ],
    correct: 1,
    explanation: "Deadlock detection with intelligent retry strategies handles temporary database contention issues."
  },
  {
    id: 141,
    category: "Architecture",
    question: "How should you implement service discovery?",
    options: [
      "Hardcode service endpoints",
      "Use service registry (Eureka, Consul) or cloud-native solutions",
      "DNS-based discovery only",
      "Configuration file with all endpoints"
    ],
    correct: 1,
    explanation: "Service registries provide dynamic service discovery and health monitoring in distributed architectures."
  },
  {
    id: 142,
    category: "Security",
    question: "How should you implement secure random number generation?",
    options: [
      "Use Math.random()",
      "Use SecureRandom for cryptographic purposes",
      "System timestamp as seed",
      "Fixed seed for reproducibility"
    ],
    correct: 1,
    explanation: "SecureRandom provides cryptographically strong random numbers suitable for security-sensitive operations."
  },
  {
    id: 143,
    category: "Testing",
    question: "How should you test concurrent access scenarios?",
    options: [
      "Single-threaded testing only",
      "Multi-threaded tests with synchronization primitives",
      "Skip concurrency testing",
      "Production testing only"
    ],
    correct: 1,
    explanation: "Controlled multi-threaded tests help identify race conditions and synchronization issues."
  },
  {
    id: 144,
    category: "Performance",
    question: "How should you implement load balancing strategies?",
    options: [
      "Random load balancing only",
      "Health-aware load balancing with multiple algorithms",
      "Single server deployment",
      "Client-side load balancing only"
    ],
    correct: 1,
    explanation: "Health-aware load balancing ensures requests go to healthy instances using appropriate algorithms for the workload."
  },
  {
    id: 145,
    category: "Configuration",
    question: "How should you handle configuration encryption?",
    options: [
      "Plain text configuration only",
      "Encrypt sensitive configuration values",
      "Database encryption only",
      "No configuration encryption needed"
    ],
    correct: 1,
    explanation: "Configuration encryption protects sensitive values even when configuration files are compromised."
  },
  {
    id: 146,
    category: "Data",
    question: "How should you implement data backup strategies?",
    options: [
      "No backup strategy needed",
      "Automated backups with retention policies and testing",
      "Manual backups only",
      "Single backup copy"
    ],
    correct: 1,
    explanation: "Automated backup strategies with testing ensure data recovery capabilities and business continuity."
  },
  {
    id: 147,
    category: "REST API",
    question: "How should you implement API documentation maintenance?",
    options: [
      "Manual documentation updates",
      "Automated documentation generation from code",
      "No API documentation needed",
      "Separate documentation team"
    ],
    correct: 1,
    explanation: "Automated documentation generation ensures API documentation stays synchronized with code changes."
  },
  {
    id: 148,
    category: "Security",
    question: "How should you implement session timeout policies?",
    options: [
      "No session timeout",
      "Configurable timeouts based on sensitivity and usage patterns",
      "Fixed short timeout for all sessions",
      "Client-side timeout only"
    ],
    correct: 1,
    explanation: "Appropriate session timeouts balance security with user experience based on application sensitivity."
  },
  {
    id: 149,
    category: "Testing",
    question: "How should you implement test data cleanup?",
    options: [
      "Leave test data in database",
      "Automatic cleanup after each test",
      "Manual test data cleanup",
      "Shared test data across tests"
    ],
    correct: 1,
    explanation: "Automatic test data cleanup ensures test isolation and prevents side effects between test runs."
  },
  {
    id: 150,
    category: "Performance",
    question: "How should you implement caching strategies for frequently accessed data?",
    options: [
      "No caching needed",
      "Multi-level caching with appropriate TTL and eviction policies",
      "Cache everything indefinitely",
      "Database-level caching only"
    ],
    correct: 1,
    explanation: "Multi-level caching with proper lifecycle management optimizes performance while maintaining data freshness."
  },
  {
    id: 151,
    category: "Architecture",
    question: "How should you handle backward compatibility in APIs?",
    options: [
      "Break compatibility when needed",
      "Version APIs and maintain compatibility contracts",
      "Single API version only",
      "Client adaptation for changes"
    ],
    correct: 1,
    explanation: "API versioning and compatibility contracts prevent breaking existing client integrations."
  },
  {
    id: 152,
    category: "Data",
    question: "How should you implement data validation pipelines?",
    options: [
      "No data validation needed",
      "Multi-stage validation with business rules",
      "Single validation point only",
      "Client-side validation only"
    ],
    correct: 1,
    explanation: "Multi-stage validation ensures data quality at input, business logic, and persistence layers."
  },
  {
    id: 153,
    category: "Configuration",
    question: "How should you implement environment-specific feature flags?",
    options: [
      "Same features in all environments",
      "Environment-aware feature flag configuration",
      "Hardcoded feature flags",
      "No feature differentiation needed"
    ],
    correct: 1,
    explanation: "Environment-specific feature flags enable different feature sets for development, staging, and production."
  },
  {
    id: 154,
    category: "Security",
    question: "How should you implement audit trail functionality?",
    options: [
      "No audit trail needed",
      "Comprehensive audit logging with tamper protection",
      "Basic operation logging only",
      "Client-side audit tracking"
    ],
    correct: 1,
    explanation: "Comprehensive audit trails with tamper protection ensure accountability and compliance requirements."
  },
  {
    id: 155,
    category: "Testing",
    question: "How should you implement performance testing?",
    options: [
      "No performance testing needed",
      "Automated performance tests with benchmarks",
      "Manual performance testing only",
      "Production performance monitoring only"
    ],
    correct: 1,
    explanation: "Automated performance testing with established benchmarks ensures consistent application performance."
  },
  {
    id: 156,
    category: "Performance",
    question: "How should you handle resource cleanup in long-running operations?",
    options: [
      "Ignore resource cleanup",
      "Implement proper resource lifecycle management",
      "Periodic application restarts",
      "Increase resource limits only"
    ],
    correct: 1,
    explanation: "Proper resource lifecycle management prevents memory leaks and resource exhaustion in long-running operations."
  },
  {
    id: 157,
    category: "Monitoring",
    question: "How should you implement alerting strategies?",
    options: [
      "No alerting needed",
      "Tiered alerting based on severity and impact",
      "Alert on every metric change",
      "Manual monitoring only"
    ],
    correct: 1,
    explanation: "Tiered alerting prevents alert fatigue while ensuring critical issues receive immediate attention."
  },
  {
    id: 158,
    category: "Data",
    question: "How should you implement data retention policies?",
    options: [
      "Keep all data forever",
      "Automated data lifecycle management based on policies",
      "Manual data cleanup only",
      "Client-side data management"
    ],
    correct: 1,
    explanation: "Automated data lifecycle management ensures compliance with retention policies while optimizing storage costs."
  },
  {
    id: 159,
    category: "Architecture",
    question: "How should you implement microservice communication patterns?",
    options: [
      "Direct database access between services",
      "API-first design with async messaging for events",
      "Shared libraries for communication",
      "File-based communication"
    ],
    correct: 1,
    explanation: "API-first design with async messaging provides loose coupling and scalable microservice communication."
  },
  {
    id: 160,
    category: "Security",
    question: "How should you implement zero-trust security principles?",
    options: [
      "Trust internal network communications",
      "Verify and authenticate all communications",
      "Perimeter security only",
      "No internal security needed"
    ],
    correct: 1,
    explanation: "Zero-trust principles require verification and authentication for all communications, regardless of network location."
  },
  {
    id: 161,
    category: "Testing",
    question: "How should you implement mutation testing?",
    options: [
      "No mutation testing needed",
      "Use mutation testing to verify test quality",
      "Manual code modification testing",
      "Production mutation testing"
    ],
    correct: 1,
    explanation: "Mutation testing helps identify weaknesses in test suites by introducing controlled code changes."
  },
  {
    id: 162,
    category: "Performance",
    question: "How should you implement auto-scaling strategies?",
    options: [
      "Fixed resource allocation",
      "Metrics-based auto-scaling with predictive scaling",
      "Manual scaling only",
      "Unlimited resource scaling"
    ],
    correct: 1,
    explanation: "Intelligent auto-scaling based on metrics and predictions optimizes resource usage and cost while maintaining performance."
  },
  {
    id: 163,
    category: "Configuration",
    question: "How should you implement configuration drift detection?",
    options: [
      "No drift detection needed",
      "Automated configuration monitoring and alerts",
      "Manual configuration audits only",
      "Accept configuration drift"
    ],
    correct: 1,
    explanation: "Automated drift detection ensures configurations remain consistent with defined standards across environments."
  },
  {
    id: 164,
    category: "Data",
    question: "How should you implement data anonymization for testing?",
    options: [
      "Use production data directly",
      "Implement data masking and synthetic data generation",
      "No test data anonymization needed",
      "Manual data modification"
    ],
    correct: 1,
    explanation: "Data masking and synthetic data generation protect privacy while providing realistic test datasets."
  },
  {
    id: 165,
    category: "Architecture",
    question: "How should you implement disaster recovery strategies?",
    options: [
      "No disaster recovery needed",
      "Multi-region deployment with automated failover",
      "Single backup server only",
      "Manual disaster recovery procedures"
    ],
    correct: 1,
    explanation: "Multi-region deployment with automated failover ensures business continuity during major outages."
  },
  {
    id: 166,
    category: "Security",
    question: "How should you implement security scanning in CI/CD pipelines?",
    options: [
      "No security scanning needed",
      "Automated vulnerability scanning and SAST/DAST tools",
      "Manual security reviews only",
      "Production security scanning only"
    ],
    correct: 1,
    explanation: "Automated security scanning in CI/CD pipelines identifies vulnerabilities early in the development process."
  },
  {
    id: 167,
    category: "Testing",
    question: "How should you implement chaos engineering practices?",
    options: [
      "No chaos testing needed",
      "Controlled failure injection to test resilience",
      "Random production failures",
      "Manual failure testing only"
    ],
    correct: 1,
    explanation: "Controlled chaos engineering validates system resilience and identifies failure scenarios before they occur in production."
  },
  {
    id: 168,
    category: "Performance",
    question: "How should you implement capacity planning?",
    options: [
      "No capacity planning needed",
      "Data-driven capacity planning with growth projections",
      "Fixed capacity allocation",
      "Reactive capacity increases only"
    ],
    correct: 1,
    explanation: "Data-driven capacity planning ensures adequate resources are available to meet projected demand."
  },
  {
    id: 169,
    category: "Monitoring",
    question: "How should you implement SLA monitoring?",
    options: [
      "No SLA monitoring needed",
      "Automated SLA tracking with real-time alerts",
      "Manual SLA calculations",
      "Client-side SLA monitoring only"
    ],
    correct: 1,
    explanation: "Automated SLA monitoring ensures service level commitments are met and provides early warning of potential breaches."
  },
  {
    id: 170,
    category: "Data",
    question: "How should you implement data lineage tracking?",
    options: [
      "No data lineage tracking needed",
      "Automated data lineage documentation and visualization",
      "Manual data flow documentation",
      "Database-level tracking only"
    ],
    correct: 1,
    explanation: "Data lineage tracking provides visibility into data flow and transformations for compliance and debugging."
  },
  {
    id: 171,
    category: "Architecture",
    question: "How should you implement API gateway patterns?",
    options: [
      "Direct service access",
      "Centralized API gateway for routing, security, and monitoring",
      "Load balancer only",
      "Client-side service discovery"
    ],
    correct: 1,
    explanation: "API gateways provide centralized cross-cutting concerns like authentication, rate limiting, and monitoring."
  },
  {
    id: 172,
    category: "Security",
    question: "How should you implement secret rotation?",
    options: [
      "Never rotate secrets",
      "Automated secret rotation with zero-downtime updates",
      "Manual secret rotation only",
      "Annual secret rotation"
    ],
    correct: 1,
    explanation: "Automated secret rotation reduces the risk of credential compromise while maintaining service availability."
  },
  {
    id: 173,
    category: "Testing",
    question: "How should you implement property-based testing?",
    options: [
      "Example-based testing only",
      "Property-based testing for complex business logic",
      "No property-based testing needed",
      "Random input testing"
    ],
    correct: 1,
    explanation: "Property-based testing explores edge cases automatically and validates invariants across input ranges."
  },
  {
    id: 174,
    category: "Performance",
    question: "How should you implement CDN strategies?",
    options: [
      "No CDN needed",
      "Strategic CDN placement for static and dynamic content",
      "CDN for images only",
      "Single CDN location"
    ],
    correct: 1,
    explanation: "Strategic CDN placement reduces latency and improves user experience by serving content closer to users."
  },
  {
    id: 175,
    category: "Configuration",
    question: "How should you implement infrastructure as code?",
    options: [
      "Manual infrastructure setup",
      "Version-controlled infrastructure definitions",
      "Documentation-based infrastructure",
      "Ad-hoc infrastructure changes"
    ],
    correct: 1,
    explanation: "Infrastructure as code ensures reproducible, version-controlled infrastructure deployments."
  },
  {
    id: 176,
    category: "Data",
    question: "How should you implement data quality monitoring?",
    options: [
      "No data quality monitoring needed",
      "Automated data quality checks with alerts",
      "Manual data quality reviews",
      "Client-side data validation only"
    ],
    correct: 1,
    explanation: "Automated data quality monitoring ensures data integrity and reliability for business operations."
  },
  {
    id: 177,
    category: "Architecture",
    question: "How should you implement event sourcing patterns?",
    options: [
      "Traditional CRUD operations only",
      "Event sourcing for audit trails and complex domains",
      "Event sourcing for all operations",
      "No event-based architecture"
    ],
    correct: 1,
    explanation: "Event sourcing provides complete audit trails and enables complex business logic replay and analysis."
  },
  {
    id: 178,
    category: "Security",
    question: "How should you implement secure coding practices?",
    options: [
      "No specific secure coding needed",
      "OWASP guidelines and security code reviews",
      "Basic input validation only",
      "Security testing only in production"
    ],
    correct: 1,
    explanation: "OWASP guidelines and security-focused code reviews prevent common vulnerabilities and attack vectors."
  },
  {
    id: 179,
    category: "Testing",
    question: "How should you implement acceptance testing?",
    options: [
      "No acceptance testing needed",
      "Automated acceptance tests with business stakeholders",
      "Manual acceptance testing only",
      "Unit tests serve as acceptance tests"
    ],
    correct: 1,
    explanation: "Automated acceptance tests ensure business requirements are met and provide confidence in releases."
  },
  {
    id: 180,
    category: "Performance",
    question: "How should you implement database sharding strategies?",
    options: [
      "Single database for all data",
      "Strategic sharding based on access patterns",
      "Random data distribution",
      "Vertical scaling only"
    ],
    correct: 1,
    explanation: "Strategic sharding distributes data based on access patterns to improve performance and scalability."
  },
  {
    id: 181,
    category: "Monitoring",
    question: "How should you implement cost monitoring for cloud resources?",
    options: [
      "No cost monitoring needed",
      "Automated cost tracking with budget alerts",
      "Monthly cost reviews only",
      "Fixed budget allocation"
    ],
    correct: 1,
    explanation: "Automated cost monitoring prevents budget overruns and identifies optimization opportunities."
  },
  {
    id: 182,
    category: "Data",
    question: "How should you implement data versioning strategies?",
    options: [
      "No data versioning needed",
      "Schema versioning with backward compatibility",
      "Data versioning in application code only",
      "Manual data version tracking"
    ],
    correct: 1,
    explanation: "Schema versioning ensures data evolution while maintaining backward compatibility for existing applications."
  },
  {
    id: 183,
    category: "Architecture",
    question: "How should you implement bulkhead patterns?",
    options: [
      "Single resource pool for all operations",
      "Isolated resource pools for different operations",
      "No resource isolation needed",
      "Manual resource allocation"
    ],
    correct: 1,
    explanation: "Bulkhead patterns prevent failure in one area from affecting other parts of the system through resource isolation."
  },
  {
    id: 184,
    category: "Security",
    question: "How should you implement threat modeling?",
    options: [
      "No threat modeling needed",
      "Systematic threat analysis and mitigation planning",
      "Ad-hoc security considerations",
      "Penetration testing only"
    ],
    correct: 1,
    explanation: "Systematic threat modeling identifies potential security risks and guides mitigation strategies during design."
  },
  {
    id: 185,
    category: "Testing",
    question: "How should you implement contract testing between services?",
    options: [
      "No contract testing needed",
      "Consumer-driven contract testing",
      "Integration testing only",
      "API documentation as contracts"
    ],
    correct: 1,
    explanation: "Consumer-driven contract testing ensures API compatibility between service providers and consumers."
  },
  {
    id: 186,
    category: "Performance",
    question: "How should you implement progressive web app features?",
    options: [
      "Traditional web application only",
      "Service workers and offline capability",
      "Mobile app development only",
      "No progressive features needed"
    ],
    correct: 1,
    explanation: "Progressive web app features improve user experience through offline capability and native app-like behavior."
  },
  {
    id: 187,
    category: "Configuration",
    question: "How should you implement blue-green deployment strategies?",
    options: [
      "Single environment deployment",
      "Parallel environment deployment with traffic switching",
      "Rolling updates only",
      "Manual deployment coordination"
    ],
    correct: 1,
    explanation: "Blue-green deployments enable zero-downtime releases with quick rollback capabilities."
  },
  {
    id: 188,
    category: "Data",
    question: "How should you implement real-time data processing?",
    options: [
      "Batch processing only",
      "Stream processing with appropriate latency guarantees",
      "Polling-based updates",
      "Client-side data processing"
    ],
    correct: 1,
    explanation: "Stream processing provides low-latency data processing for real-time business requirements."
  },
  {
    id: 189,
    category: "Architecture",
    question: "How should you implement domain-driven design principles?",
    options: [
      "Technical architecture only",
      "Business domain-focused architecture and modeling",
      "Database-driven design",
      "Framework-driven architecture"
    ],
    correct: 1,
    explanation: "Domain-driven design aligns software architecture with business domains for better maintainability and understanding."
  },
  {
    id: 190,
    category: "Security",
    question: "How should you implement multi-factor authentication?",
    options: [
      "Password authentication only",
      "Multiple authentication factors with appropriate UX",
      "Security questions only",
      "Biometric authentication only"
    ],
    correct: 1,
    explanation: "Multi-factor authentication significantly improves security while maintaining usable authentication flows."
  },
  {
    id: 191,
    category: "Testing",
    question: "How should you implement visual regression testing?",
    options: [
      "No visual testing needed",
      "Automated screenshot comparison testing",
      "Manual visual inspection only",
      "Code-based UI testing only"
    ],
    correct: 1,
    explanation: "Visual regression testing catches unintended UI changes that might not be detected by functional tests."
  },
  {
    id: 192,
    category: "Performance",
    question: "How should you implement edge computing strategies?",
    options: [
      "Centralized processing only",
      "Strategic edge placement for latency-sensitive operations",
      "Client-side processing only",
      "No edge computing needed"
    ],
    correct: 1,
    explanation: "Edge computing reduces latency for time-sensitive operations by processing data closer to users."
  },
  {
    id: 193,
    category: "Monitoring",
    question: "How should you implement compliance monitoring?",
    options: [
      "No compliance monitoring needed",
      "Automated compliance checking with audit trails",
      "Manual compliance reviews only",
      "Annual compliance audits only"
    ],
    correct: 1,
    explanation: "Automated compliance monitoring ensures ongoing adherence to regulatory requirements with complete audit trails."
  },
  {
    id: 194,
    category: "Data",
    question: "How should you implement data lake architectures?",
    options: [
      "Traditional database only",
      "Structured data lake with governance and cataloging",
      "Unstructured data dump",
      "Multiple isolated data stores"
    ],
    correct: 1,
    explanation: "Structured data lakes with proper governance enable scalable analytics while maintaining data quality."
  },
  {
    id: 195,
    category: "Architecture",
    question: "How should you implement serverless architectures?",
    options: [
      "Traditional server deployment only",
      "Function-based architecture with appropriate use cases",
      "Serverless for all operations",
      "No serverless adoption"
    ],
    correct: 1,
    explanation: "Serverless architectures are ideal for event-driven, variable-load workloads with automatic scaling requirements."
  },
  {
    id: 196,
    category: "Security",
    question: "How should you implement privacy by design principles?",
    options: [
      "Add privacy features later",
      "Integrate privacy considerations throughout development",
      "Privacy compliance only",
      "No specific privacy design needed"
    ],
    correct: 1,
    explanation: "Privacy by design ensures data protection is built into systems from the ground up, not added as an afterthought."
  },
  {
    id: 197,
    category: "Testing",
    question: "How should you implement accessibility testing?",
    options: [
      "No accessibility testing needed",
      "Automated and manual accessibility testing",
      "Manual testing only",
      "Accessibility as optional feature"
    ],
    correct: 1,
    explanation: "Comprehensive accessibility testing ensures applications are usable by people with disabilities and meets legal requirements."
  },
  {
    id: 198,
    category: "Performance",
    question: "How should you implement GraphQL optimization strategies?",
    options: [
      "REST APIs only",
      "Query complexity analysis and caching strategies",
      "No GraphQL optimization needed",
      "Simple GraphQL implementation only"
    ],
    correct: 1,
    explanation: "GraphQL optimization prevents expensive queries and improves performance through proper analysis and caching."
  },
  {
    id: 199,
    category: "Configuration",
    question: "How should you implement GitOps practices?",
    options: [
      "Manual deployment processes",
      "Git-based deployment automation and configuration management",
      "CI/CD without version control",
      "Ad-hoc deployment scripts"
    ],
    correct: 1,
    explanation: "GitOps provides declarative, version-controlled deployment processes with complete audit trails and rollback capabilities."
  },
  {
    id: 200,
    category: "Architecture",
    question: "How should you implement sustainable software development practices?",
    options: [
      "Focus only on functionality",
      "Consider environmental impact in architectural decisions",
      "Performance optimization only",
      "No sustainability considerations needed"
    ],
    correct: 1,
    explanation: "Sustainable software development considers environmental impact through efficient resource usage and green computing practices."
  }
];

export const categories = Array.from(new Set(questions.map(q => q.category)));