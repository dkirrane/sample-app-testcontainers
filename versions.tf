terraform {
  required_version = "0.14.8"

  required_providers {
    null = {
      source  = "hashicorp/null"
      version = "3.1.0"
    }
  }

  backend "remote" {
    organization = "deasunk"

    workspaces {
      name = "terraform-gh-actions-sample"
    }
  }
}