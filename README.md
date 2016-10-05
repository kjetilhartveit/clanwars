
Installation of Clan Wars
=========================

1a. Open the file C:\windows\system32\drivers\etc\hosts
1b. Add the line "127.0.0.1     clanwars"
2a. Open the file C:\xampp\apache\conf\extra\http-vhosts.conf
2b. Add this to end of the file:

<VirtualHost *:80>
    DocumentRoot "{root to site}\ClanWars\site\www"
    ServerName clanwars

    <Directory "{root to site}\ClanWars\site\www">
      AllowOverride All
      Require all granted
      Options Indexes FollowSymLinks
    </Directory>
</VirtualHost>

