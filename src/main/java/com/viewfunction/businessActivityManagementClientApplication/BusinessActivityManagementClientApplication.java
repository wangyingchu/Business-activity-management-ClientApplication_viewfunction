package com.viewfunction.businessActivityManagementClientApplication;

import com.viewfunction.businessActivityManagementClientApplication.util.ApplicationLauncherUtil;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BusinessActivityManagementClientApplication {

	public static void main(String[] args) {
		SpringApplication.run(BusinessActivityManagementClientApplication.class, args);
		ApplicationLauncherUtil.printApplicationConsoleBanner();
	}
}
