package com.sample.app.oracle;

import org.springframework.boot.SpringApplication;

public class TestSampleAppOracleApplication {

	public static void main(String[] args) {
		SpringApplication.from(SampleAppOracleApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
