resource "null_resource" "test" {
  triggers = {
    always_run = timestamp()
  }

  provisioner "local-exec" {
    command = "echo Testing"
  }
}