package com.sample.app.sample_app_oracle;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;

@Import(TestcontainersConfiguration.class)
@SpringBootTest
class SampleAppOracleApplicationTests {

	@Test
	void contextLoads() {
	}

}
