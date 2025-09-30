package com.sample.app.sample_app_oracle;

import org.springframework.boot.SpringApplication;

public class TestSampleAppOracleApplication {

	public static void main(String[] args) {
		SpringApplication.from(SampleAppOracleApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
