config_file=~/.bashrc

echo "" >> $config_file
echo "# automatically added for website scripts" >> $config_file
echo "WEBSITE_DIRECTORY=$(pwd)" >> $config_file
echo "export PATH=\$WEBSITE_DIRECTORY/scripts/bin:\$PATH" >> $config_file
