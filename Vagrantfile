VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # use base config box
  config.vm.box = "ubuntu/trusty64"

  # set hard forward port
  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "forwarded_port", guest: 83, host: 8083

  #setup ansible
  config.vm.provision :ansible do |ansible|
    ansible.playbook = "./playbook.yml"
  end

end