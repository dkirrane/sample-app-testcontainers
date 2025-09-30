import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Database, Server, MessageSquare, Search, Package, CheckCircle } from 'lucide-react';

const slides = [
  {
    title: "Testcontainers",
    subtitle: "Integration Testing with Real Dependencies",
    content: (
      <div className="space-y-6">
        <p className="text-xl text-gray-600">Making integration tests reliable, portable, and maintainable</p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Our Stack</h3>
            <ul className="text-sm space-y-1">
              <li>• Spring Boot Backend</li>
              <li>• Angular Frontend (Nx)</li>
              <li>• Oracle, Redis, Kafka</li>
              <li>• Solr, Snowflake</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Today's Agenda</h3>
            <ul className="text-sm space-y-1">
              <li>• Core concepts</li>
              <li>• Live demos</li>
              <li>• CI/CD integration</li>
              <li>• Best practices</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "The Problem",
    subtitle: "Traditional Integration Testing Challenges",
    content: (
      <div className="space-y-4">
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <h3 className="font-semibold text-red-900 mb-2">❌ In-Memory Databases</h3>
          <p className="text-sm text-red-800">H2 doesn't match Oracle behavior - SQL dialects differ, features missing</p>
        </div>
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <h3 className="font-semibold text-red-900 mb-2">❌ Mocked Dependencies</h3>
          <p className="text-sm text-red-800">Mocks don't catch integration issues - false confidence</p>
        </div>
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <h3 className="font-semibold text-red-900 mb-2">❌ Shared Test Environments</h3>
          <p className="text-sm text-red-800">Flaky tests, data pollution, coordination overhead</p>
        </div>
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <h3 className="font-semibold text-red-900 mb-2">❌ Local vs CI Differences</h3>
          <p className="text-sm text-red-800">"Works on my machine" - environment drift</p>
        </div>
      </div>
    )
  },
  {
    title: "The Solution",
    subtitle: "Testcontainers Approach",
    content: (
      <div className="space-y-4">
        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" /> Real Dependencies in Docker
          </h3>
          <p className="text-sm text-green-800">Test against actual Oracle, Redis, Kafka - not mocks</p>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" /> Isolated & Disposable
          </h3>
          <p className="text-sm text-green-800">Fresh containers per test suite - no shared state</p>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" /> Code-First Configuration
          </h3>
          <p className="text-sm text-green-800">No docker-compose files - programmatic Java/Kotlin API</p>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" /> Works Everywhere
          </h3>
          <p className="text-sm text-green-800">Same setup in dev, CI, and production testing</p>
        </div>
      </div>
    )
  },
  {
    title: "How It Works",
    subtitle: "Under the Hood",
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-4 text-lg">Testcontainers Lifecycle</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
              <div>
                <p className="font-semibold">Test starts</p>
                <p className="text-sm text-gray-600">Testcontainers detects Docker daemon</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
              <div>
                <p className="font-semibold">Pulls & starts containers</p>
                <p className="text-sm text-gray-600">Waits for readiness (health checks, log output)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
              <div>
                <p className="font-semibold">Exposes dynamic ports</p>
                <p className="text-sm text-gray-600">Spring Boot auto-configures connection properties</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
              <div>
                <p className="font-semibold">Tests execute</p>
                <p className="text-sm text-gray-600">Real interactions with containerized services</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
              <div>
                <p className="font-semibold">Automatic cleanup</p>
                <p className="text-sm text-gray-600">Containers stopped and removed (Ryuk container)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Demo 1: Oracle Database",
    subtitle: "Testing with Real Oracle",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Database className="w-8 h-8 text-red-600" />
          <h3 className="text-xl font-semibold">Repository Integration Tests</h3>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-semibold mb-2">Key Points:</h4>
          <ul className="space-y-2 text-sm">
            <li>• <strong>No H2 compromises</strong> - Test Oracle-specific features (sequences, PL/SQL, CLOB/BLOB)</li>
            <li>• <strong>Schema migrations</strong> - Flyway/Liquibase run against real DB</li>
            <li>• <strong>JPA dialect accuracy</strong> - Catch Hibernate mapping issues early</li>
            <li>• <strong>Transaction behavior</strong> - Real commit/rollback semantics</li>
          </ul>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <p className="text-sm"><strong>Demo:</strong> Show entity persistence, complex queries, and rollback scenarios</p>
        </div>
      </div>
    )
  },
  {
    title: "Demo 2: Redis Cache",
    subtitle: "Cache Layer Testing",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Server className="w-8 h-8 text-red-500" />
          <h3 className="text-xl font-semibold">Redis Integration</h3>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-semibold mb-2">Key Points:</h4>
          <ul className="space-y-2 text-sm">
            <li>• <strong>@Cacheable testing</strong> - Verify Spring Cache abstraction works</li>
            <li>• <strong>TTL validation</strong> - Test expiration policies</li>
            <li>• <strong>Cache eviction</strong> - Ensure @CacheEvict clears correctly</li>
            <li>• <strong>Session storage</strong> - Test Spring Session Redis</li>
            <li>• <strong>Serialization</strong> - Catch object serialization issues</li>
          </ul>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <p className="text-sm"><strong>Demo:</strong> Cache hit/miss scenarios, eviction strategies, TTL expiration</p>
        </div>
      </div>
    )
  },
  {
    title: "Demo 3: Kafka Messaging",
    subtitle: "Event-Driven Architecture",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <MessageSquare className="w-8 h-8 text-purple-600" />
          <h3 className="text-xl font-semibold">Kafka Producer/Consumer</h3>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-semibold mb-2">Key Points:</h4>
          <ul className="space-y-2 text-sm">
            <li>• <strong>End-to-end message flow</strong> - Test producer → topic → consumer</li>
            <li>• <strong>Serialization formats</strong> - JSON, Avro, Protobuf validation</li>
            <li>• <strong>Consumer groups</strong> - Test partition assignment and rebalancing</li>
            <li>• <strong>Error handling</strong> - Dead letter topics, retry logic</li>
            <li>• <strong>Idempotency</strong> - Verify duplicate message handling</li>
          </ul>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <p className="text-sm"><strong>Demo:</strong> Send event, consume event, verify processing + DLQ scenario</p>
        </div>
      </div>
    )
  },
  {
    title: "Demo 4: Solr Search",
    subtitle: "Search & Indexing Tests",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Search className="w-8 h-8 text-orange-600" />
          <h3 className="text-xl font-semibold">Solr Integration</h3>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-semibold mb-2">Key Points:</h4>
          <ul className="space-y-2 text-sm">
            <li>• <strong>Schema validation</strong> - Test field types and analyzers</li>
            <li>• <strong>Indexing pipelines</strong> - Verify document transformation</li>
            <li>• <strong>Query accuracy</strong> - Test relevance, filters, facets</li>
            <li>• <strong>Auto-suggest</strong> - Test suggestion components</li>
            <li>• <strong>Performance</strong> - Benchmark query response times</li>
          </ul>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <p className="text-sm"><strong>Demo:</strong> Index documents, search queries, faceted navigation</p>
        </div>
      </div>
    )
  },
  {
    title: "Demo 5: Multi-Container",
    subtitle: "Complex Integration Scenarios",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Package className="w-8 h-8 text-blue-600" />
          <h3 className="text-xl font-semibold">Docker Compose Module</h3>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-semibold mb-2">Full Workflow Test:</h4>
          <div className="text-sm space-y-3 mt-3">
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 text-white rounded px-2 py-1 text-xs">1</div>
              <span>API receives request → saves to Oracle</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 text-white rounded px-2 py-1 text-xs">2</div>
              <span>Publishes event to Kafka</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 text-white rounded px-2 py-1 text-xs">3</div>
              <span>Consumer reads event, indexes in Solr</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 text-white rounded px-2 py-1 text-xs">4</div>
              <span>Caches result in Redis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 text-white rounded px-2 py-1 text-xs">5</div>
              <span>Search API verifies indexed data</span>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 p-3 rounded">
          <p className="text-sm"><strong>Benefits:</strong> Test real service interactions, network communication, data consistency</p>
        </div>
      </div>
    )
  },
  {
    title: "CI/CD Integration",
    subtitle: "Running in Build Pipelines",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-semibold mb-2">GitHub Actions / Jenkins Setup:</h4>
          <ul className="space-y-2 text-sm">
            <li>• <strong>Docker-in-Docker</strong> - Most CI systems support it natively</li>
            <li>• <strong>Testcontainers Cloud</strong> - Alternative for restricted environments</li>
            <li>• <strong>Image caching</strong> - Pull images once, reuse across builds</li>
            <li>• <strong>Parallel execution</strong> - Run test suites concurrently</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 p-3 rounded">
            <h4 className="font-semibold text-sm mb-2">✅ Best Practices</h4>
            <ul className="text-xs space-y-1">
              <li>• Use .withReuse() for faster dev</li>
              <li>• Set resource limits</li>
              <li>• Clean up on failure</li>
              <li>• Monitor container logs</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-3 rounded">
            <h4 className="font-semibold text-sm mb-2">⚡ Performance Tips</h4>
            <ul className="text-xs space-y-1">
              <li>• Use lightweight images</li>
              <li>• Share containers via @ServiceConnection</li>
              <li>• Optimize wait strategies</li>
              <li>• Prune unused images</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Snowflake Considerations",
    subtitle: "Testing Cloud Data Warehouse",
    content: (
      <div className="space-y-4">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold mb-2">Challenge:</h4>
          <p className="text-sm">No official Snowflake Docker image - it's a cloud-native service</p>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-semibold mb-2">Testing Strategies:</h4>
          <ul className="space-y-2 text-sm">
            <li>• <strong>Ephemeral Snowflake DB</strong> - Use real Snowflake with test schema (automated cleanup)</li>
            <li>• <strong>DuckDB as substitute</strong> - Similar SQL syntax, runs in container</li>
            <li>• <strong>PostgreSQL fallback</strong> - For basic SQL validation</li>
            <li>• <strong>Mock for unit tests</strong> - Repository layer mocking</li>
            <li>• <strong>Separate integration suite</strong> - Run Snowflake tests separately with credentials</li>
          </ul>
        </div>
        <div className="bg-yellow-50 p-3 rounded">
          <p className="text-sm"><strong>Recommendation:</strong> Use Testcontainers for real-time systems (Oracle, Redis, Kafka, Solr) and separate integration tests for Snowflake analytics queries</p>
        </div>
      </div>
    )
  },
  {
    title: "Angular Frontend Testing",
    subtitle: "E2E Testing with Backend Containers",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-semibold mb-2">Testcontainers + Playwright/Cypress:</h4>
          <ul className="space-y-2 text-sm">
            <li>• <strong>Full-stack E2E</strong> - Angular UI + Spring Boot API + Real DB</li>
            <li>• <strong>Component testing</strong> - Test AG Grid interactions with real API</li>
            <li>• <strong>Data validation</strong> - Verify UI displays correct backend data</li>
            <li>• <strong>Nx integration</strong> - Run affected tests with containerized backend</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-4 rounded">
          <h4 className="font-semibold mb-2">Example Workflow:</h4>
          <div className="text-sm space-y-2 mt-2">
            <p>1. Start backend with Testcontainers (Oracle, Redis, etc.)</p>
            <p>2. Seed test data via API or direct DB access</p>
            <p>3. Launch Angular dev server</p>
            <p>4. Run Playwright tests against real stack</p>
            <p>5. Containers auto-cleanup after tests</p>
          </div>
        </div>
        <div className="bg-green-50 p-3 rounded">
          <p className="text-sm"><strong>Benefit:</strong> Test complete user workflows with production-like backend behavior</p>
        </div>
      </div>
    )
  },
  {
    title: "Best Practices",
    subtitle: "Tips for Production Use",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="bg-green-50 p-3 rounded">
            <h4 className="font-semibold text-sm mb-2">✅ Do's</h4>
            <ul className="text-xs space-y-1">
              <li>• Use @ServiceConnection in Spring Boot 3.1+</li>
              <li>• Share containers across test classes</li>
              <li>• Set explicit wait strategies</li>
              <li>• Use specific image tags (not :latest)</li>
              <li>• Clean test data between tests</li>
              <li>• Configure proper resource limits</li>
              <li>• Enable reuse mode for local dev</li>
              <li>• Monitor container health</li>
            </ul>
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-red-50 p-3 rounded">
            <h4 className="font-semibold text-sm mb-2">❌ Don'ts</h4>
            <ul className="text-xs space-y-1">
              <li>• Don't use :latest tags</li>
              <li>• Don't ignore container logs</li>
              <li>• Don't start containers in @BeforeEach</li>
              <li>• Don't hardcode ports</li>
              <li>• Don't skip cleanup on failure</li>
              <li>• Don't run too many parallel containers</li>
              <li>• Don't commit credentials in tests</li>
              <li>• Don't test everything with containers</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Key Takeaways",
    subtitle: "Summary & Next Steps",
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">What We Covered:</h4>
          <ul className="space-y-2 text-sm">
            <li>✓ Testcontainers eliminates integration testing pain points</li>
            <li>✓ Test with real Oracle, Redis, Kafka, Solr instead of mocks</li>
            <li>✓ Same environment locally and in CI/CD</li>
            <li>✓ Multi-container scenarios for complex workflows</li>
            <li>✓ Strategies for cloud services like Snowflake</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Next Steps:</h4>
          <ul className="space-y-2 text-sm">
            <li>1. Start with one service (Oracle or Redis)</li>
            <li>2. Migrate existing integration tests incrementally</li>
            <li>3. Add CI/CD pipeline support</li>
            <li>4. Expand to multi-container scenarios</li>
            <li>5. Share patterns across teams</li>
          </ul>
        </div>
        <div className="text-center mt-6">
          <p className="text-lg font-semibold">Questions?</p>
        </div>
      </div>
    )
  }
];

export default function TestcontainersPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Slide Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-12 min-h-[600px] flex flex-col">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-xl text-gray-600">
              {slides[currentSlide].subtitle}
            </h2>
          </div>

          {/* Content */}
          <div className="flex-1">
            {slides[currentSlide].content}
          </div>

          {/* Footer with Navigation */}
          <div className="mt-8 flex items-center justify-between border-t pt-6">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === slides.length - 1}
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4 text-sm text-gray-500">
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
}