<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr_FR">
<context>
    <name>flash</name>
    <message>
        <location filename="../src/flash_model.py" line="363"/>
        <source>Error while generating the partitions image.</source>
        <translation type="unfinished">Erreur lors de la génération de l&apos;image des partitions.</translation>
    </message>
    <message>
        <location filename="../src/flash_model.py" line="378"/>
        <source>Error while generating LittleFS image:</source>
        <translation type="unfinished">Erreur lors de la génération de l&apos;image LittleFS&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/flash_model.py" line="385"/>
        <source>Firmware image could not be found. Please refresh the cached files.</source>
        <translation type="unfinished">L&apos;image du firmware est introuvable. Veuillez actualiser les fichiers mis en cache.</translation>
    </message>
    <message>
        <location filename="../src/flash_model.py" line="392"/>
        <source>Bootloader image could not be found. Please refresh the cached files.</source>
        <translation type="unfinished">L&apos;image du chargeur de démarrage est introuvable. Veuillez actualiser les fichiers mis en cache.</translation>
    </message>
    <message>
        <location filename="../src/flash_model.py" line="407"/>
        <source>Flashing failed
1. Check that the microcontroller is plugged in
2. For Snaps (Ubuntu Store) enable serial port access
 - Run in a terminal: snap connect inamata-flasher:raw-usb
 - Restart the app
3. Open a bug report or ask for support in the forum.

https://github.com/InamataCo/Flasher
https://inamata.co/forum/</source>
        <translation type="unfinished">Le flasher a échoué
1. Vérifiez que le microcontrôleur est branché
2. Pour Snaps (Ubuntu Store), activez l&apos;accès au port série
  - Exécuter dans un terminal&#xa0;: snap connect inamata-flasher:raw-usb
  - Redémarrez l&apos;application
3. Ouvrez un rapport de bug ou demandez de l&apos;aide sur le forum.

https://github.com/InamataCo/Flasher
https://inamata.co/forum/</translation>
    </message>
    <message>
        <location filename="../src/flash_model.py" line="419"/>
        <source>Flashing failed
1. Check that the microcontroller is plugged in
2. Open a bug report or ask for support in the forum.

https://github.com/InamataCo/Flasher
https://inamata.co/forum/</source>
        <translation type="unfinished">Le flasher a échoué
1. Vérifiez que le microcontrôleur est branché
2. Ouvrez un rapport de bug ou demandez de l&apos;aide sur le forum.

https://github.com/InamataCo/Flasher
https://inamata.co/forum/</translation>
    </message>
    <message>
        <location filename="../src/flash_model.py" line="429"/>
        <source>User is missing permissions
1. Add the user to the dialout group (access serial ports)
  - Run in a terminal: sudo usermod -a -G dialout $USER
2. Log out and back in again</source>
        <translation type="unfinished">L&apos;utilisateur n&apos;a pas d&apos;autorisations
1. Ajoutez l&apos;utilisateur au groupe de &apos;dialout&apos; (accès aux ports série)
   - Exécuter dans un terminal&#xa0;: sudo usermod -a -G dialout $USER
2. Déconnectez-vous et reconnectez-vous</translation>
    </message>
    <message>
        <location filename="../src/flash_model.py" line="439"/>
        <source>Listing COM / serial ports failed
For Snap installations:
 - Run in a terminal: snap connect inamata-flasher:raw-usb
 - Restart the app</source>
        <translation type="unfinished">La liste des ports COM/série a échoué
Pour les installations Snap&#xa0;:
  - Exécuter dans un terminal&#xa0;: snap connect inamata-flasher:raw-usb
  - Redémarrez l&apos;application</translation>
    </message>
    <message>
        <location filename="../src/flash_model.py" line="442"/>
        <source>Error when listing COM ports:</source>
        <translation type="unfinished">Erreur lors de la liste des ports COM&#xa0;:</translation>
    </message>
</context>
<context>
    <name>help</name>
    <message>
        <location filename="../src/controller.py" line="1404"/>
        <source>1. Enable serial port access (part 1)
  - Run in a terminal: sudo usermod -a -G dialout $USER

2. Log out and back in again (or restart)

3. Enable serial port access (part 2)
 - Run in a terminal: snap connect inamata-flasher:raw-usb
 - Restart the app

4. (Optional) Allow saving login
 - Run in a terminal: snap connect inamata-flasher:password-manager-service
 - Restart the app

5. (Optional) Verify permissions
 - Run in a terminal: snap connections inamata-flasher
 - Run in a terminal: groups

6. Additional information and support
 - https://github.com/InamataCo/Flasher
 - https://inamata.co/forum/</source>
        <translation type="unfinished">1. Activer l&apos;accès au port série (partie 1)
  - Exécutez dans un terminal&#xa0;: sudo usermod -a -G dialout $USER

2. Déconnectez-vous et reconnectez-vous (ou redémarrez)

3. Activer l&apos;accès au port série (partie 2)
 - Exécutez dans un terminal&#xa0;: snap connect inamata-flasher:raw-usb
 - Redémarrer l&apos;application

4. ( Optionnel) Autoriser l&apos;enregistrement de la connexion
 - Exécutez dans un terminal&#xa0;: snap connect inamata-flasher:password-manager-service
 - Redémarrer l&apos;application

5. (Optionnel) Vérifier les permissions
 - Exécuter dans un terminal&#xa0;: snap connections inamata-flasher
 - Exécuter dans un terminal&#xa0;: groups

6. Informations complémentaires et assistance (EN)
 - https://github.com/InamataCo/Flasher
 - https://inamata.co/forum/</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1421"/>
        <source>1. Enable serial port access
  - Run in a terminal: sudo usermod -a -G dialout $USER

2. Log out and back in again (or restart)

3. (Optional) Verify permissions
 - Run in a terminal: groups

4. Additional information and support
 - https://github.com/InamataCo/Flasher
 - https://inamata.co/forum/</source>
        <translation type="unfinished">1. Activer l&apos;accès au port série
  - Exécutez dans un terminal&#xa0;: sudo usermod -a -G dialout $USER

2. Déconnectez-vous et reconnectez-vous (ou redémarrez).

3. (Optionnel) Vérifier les permissions
 - Exécuter dans un terminal&#xa0;: groups

4. Informations complémentaires et assistance (EN)
 - https://github.com/InamataCo/Flasher
 - https://inamata.co/forum/</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1433"/>
        <source>1. Install the serial driver (CP210x)
  - https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip
  - https://github.com/InamataCo/Flasher#driver-setup-instructions

2. Additional information and support
 - https://github.com/InamataCo/Flasher
 - https://inamata.co/forum/</source>
        <translation type="unfinished">1. Installer le pilote série (CP210x)
  - https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip
  - https://github.com/InamataCo/Flasher#driver-setup-instructions

2. Informations complémentaires et assistance (EN)
 - https://github.com/InamataCo/Flasher
 - https://inamata.co/forum/</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../src/about_view.py" line="37"/>
        <location filename="../src/controller.py" line="1213"/>
        <source>About</source>
        <translation type="unfinished">A propos de</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="67"/>
        <source>Clear local data</source>
        <translation type="unfinished">Effacer les données locales</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="69"/>
        <source>Open system settings</source>
        <translation type="unfinished">Ouvrir les paramètres du système</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1217"/>
        <source>Setup</source>
        <translation type="unfinished">Mise en place</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1223"/>
        <source>Open the following web page if it does not automatically open.</source>
        <translation type="unfinished">Ouvrez la page Web suivante si elle ne s&apos;ouvre pas automatiquement.</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1227"/>
        <source>Cleared local data</source>
        <translation type="unfinished">Données locales effacées</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1233"/>
        <source>Cleared secrets, configurations and cached data.</source>
        <translation type="unfinished">Les secrets, les configurations et les données mises en cache ont été effacés.</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1237"/>
        <source>Invalid WiFi connection</source>
        <translation type="unfinished">Connexion WiFi invalide</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1243"/>
        <source>The WiFi name (SSID) is blank. Please enter a WiFi name.</source>
        <translation type="unfinished">Le nom WiFi (SSID) est vide. Veuillez saisir un nom WiFi.</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1250"/>
        <source>The WiFi name (SSID) is too long. Please enter a WiFi name with 32 characters or fewer.</source>
        <translation type="unfinished">Le nom du WiFi (SSID) est trop long. Veuillez saisir un nom WiFi comportant 32&#xa0;caractères ou moins.</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1256"/>
        <source>Latest</source>
        <comment>Label for latest firmware image</comment>
        <translation type="unfinished">Dernier</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1263"/>
        <source>No firmware images found on the server. Check that you have permissions to view firmware images or contact support.</source>
        <translation type="unfinished">Aucune image du firmware trouvée sur le serveur. Vérifiez que vous disposez des autorisations nécessaires pour afficher les images du firmware ou contacter l’assistance.</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1267"/>
        <location filename="../src/controller.py" line="1271"/>
        <source>No firmware images found</source>
        <translation type="unfinished">Aucune image du firmware trouvée</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1275"/>
        <source>Enable Flash Mode</source>
        <translation type="unfinished">Activer le mode Flash</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1282"/>
        <source>After closing this message, please press and hold the boot button on the ESP32 until the flash process starts.</source>
        <translation type="unfinished">Après avoir fermé ce message, veuillez appuyer et maintenir le bouton de démarrage de l&apos;ESP32 jusqu&apos;à ce que le processus de flash démarre.</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1286"/>
        <source>Finished Flashing</source>
        <translation type="unfinished">Le flasher terminé</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1292"/>
        <source>Successfully flashed the microcontroller</source>
        <translation type="unfinished">Flashage réussi du microcontrôleur</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1296"/>
        <source>No Sites Found</source>
        <translation type="unfinished">Aucun lieu trouvé</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1302"/>
        <source>No sites found. Use the web app to create new sites.</source>
        <translation type="unfinished">Aucun lieu trouvé. Utilisez l&apos;application Web pour créer de nouveaux lieux.</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1306"/>
        <source>No controllers found</source>
        <translation type="unfinished">Aucun contrôleur trouvé</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1310"/>
        <source>Missing cached data</source>
        <translation type="unfinished">Données mises en cache manquantes</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1317"/>
        <source>Controller not found in cache. Please clear cached data and try again.</source>
        <translation type="unfinished">Contrôleur introuvable dans le cache. Veuillez effacer les données mises en cache et réessayer.</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1321"/>
        <source>Get Firmware</source>
        <translation type="unfinished">Obtenir le firmware</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1325"/>
        <source>Get Bootloader</source>
        <translation type="unfinished">Obtenir le chargeur de démarrage</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1329"/>
        <source>Registering</source>
        <translation type="unfinished">Enregistrement</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1333"/>
        <source>Flashing</source>
        <translation type="unfinished">Flashant</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1337"/>
        <source>Missing Input</source>
        <translation type="unfinished">Entrée manquante</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1345"/>
        <source>Please select a site or reload if none are available. If the problem persists please update the Inamata Flasher or contact your administrator.</source>
        <translation type="unfinished">Veuillez sélectionner un lieu ou recharger si aucun n&apos;est disponible. Si le problème persiste, veuillez mettre à jour Inamata Flasher ou contacter votre administrateur.</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1351"/>
        <source>Please enter a name for the new controller.</source>
        <translation type="unfinished">Veuillez saisir un nom pour le nouveau contrôleur.</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1359"/>
        <source>Please select one or more WiFi connections to be used by the controller. To add or change entries, go to the &apos;Manage WiFi&apos; page.</source>
        <translation type="unfinished">Veuillez sélectionner une ou plusieurs connexions WiFi à utiliser par le contrôleur. Pour ajouter ou modifier des entrées, accédez à la page «&#xa0;Gérer le WiFi&#xa0;».</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1367"/>
        <source>Please select a firmware version or reload if none are available. If the problem persists please update the Inamata Flasher or contact your administrator.</source>
        <translation type="unfinished">Veuillez sélectionner une version du firmware ou recharger si aucune n&apos;est disponible. Si le problème persiste, veuillez mettre à jour Inamata Flasher ou contacter votre administrateur.</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1371"/>
        <source>Permission error</source>
        <translation type="unfinished">Erreur d&apos;autorisation</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1374"/>
        <source>No serial ports found</source>
        <translation type="unfinished">Aucun port série trouvé</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1376"/>
        <source>Found 1 serial port:</source>
        <translation type="unfinished">1 port série trouvé&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/controller.py" line="1378"/>
        <source>Found %n serial ports:</source>
        <translation type="unfinished">%n ports série trouvés&#xa0;:</translation>
    </message>
</context>
<context>
    <name>server</name>
    <message>
        <location filename="../src/server_model.py" line="953"/>
        <source>Error while getting site and firmware data.</source>
        <translation type="unfinished">Erreur lors de l&apos;obtention des données du lieu et du firmware.</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="959"/>
        <source>Error while getting controller data.</source>
        <translation type="unfinished">Erreur lors de l&apos;obtention des données du contrôleur.</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="966"/>
        <source>Not all controllers for this site could be fetched. Please upgrade the Inamata Flasher.</source>
        <translation type="unfinished">Tous les contrôleurs de ce lieu n&apos;ont pas pu être récupérés. Veuillez mettre à niveau Inamata Flasher.</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="972"/>
        <source>Error while getting default partition table data.</source>
        <translation type="unfinished">Erreur lors de l&apos;obtention des données de la table de partition par défaut.</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="978"/>
        <source>Could not find default partition table</source>
        <translation type="unfinished">Impossible de trouver la table de partition par défaut</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="984"/>
        <source>Error while getting partition table data.</source>
        <translation type="unfinished">Erreur lors de l&apos;obtention des données de la table de partition.</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="990"/>
        <source>Could not find partition table on server.</source>
        <translation type="unfinished">Impossible de trouver la table de partition sur le serveur.</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="997"/>
        <source>Could not find the controller. Please reload the controller data.</source>
        <translation type="unfinished">Impossible de trouver le contrôleur. Veuillez recharger les données du contrôleur.</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="1004"/>
        <source>Failed deleting controller. Check your permissions or contact your administrator.</source>
        <translation type="unfinished">Échec de la suppression du contrôleur. Vérifiez vos autorisations ou contactez votre administrateur.</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="1011"/>
        <source>Failed connecting to the authentication server. Check your internet connection or contact Inamata.</source>
        <translation type="unfinished">Échec de la connexion au serveur d&apos;authentification. Vérifiez votre connexion Internet ou contactez Inamata.</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="1018"/>
        <source>Error downloading firmware. Not all required metadata found:</source>
        <translation type="unfinished">Erreur lors du téléchargement du firmware. Toutes les métadonnées requises n&apos;ont pas été trouvées&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="1025"/>
        <source>Error downloading bootloader. Not all required metadata found:</source>
        <translation type="unfinished">Erreur lors du téléchargement du chargeur de démarrage. Toutes les métadonnées requises n&apos;ont pas été trouvées&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="1032"/>
        <source>Failed downloading the file. Try refreshing, check your internet connection or contact support.</source>
        <translation type="unfinished">Échec du téléchargement du fichier. Essayez d&apos;actualiser, vérifiez votre connexion Internet ou contactez l&apos;assistance.</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="1039"/>
        <source>Checksum of downloaded file did not match. Please try another version or contact support.</source>
        <translation type="unfinished">La somme de contrôle du fichier téléchargé ne correspond pas. Veuillez essayer une autre version ou contacter l&apos;assistance.</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="1045"/>
        <source>Error while refreshing the firmware URL. Please reload data.</source>
        <translation type="unfinished">Erreur lors de l&apos;actualisation de l&apos;URL du firmware. Veuillez recharger les données.</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="1051"/>
        <source>Error while refreshing the bootloader URL. Please reload data.</source>
        <translation type="unfinished">Erreur lors de l&apos;actualisation de l&apos;URL du chargeur de démarrage. Veuillez recharger les données.</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="1057"/>
        <source>Access has expired. Please log in again.</source>
        <translation type="unfinished">L&apos;accès a expiré. Veuillez vous reconnecter.</translation>
    </message>
    <message>
        <location filename="../src/server_model.py" line="1064"/>
        <source>An error occurred while requesting data from the server API. Check that you&apos;re using an up-to-date version of the Inamata Flasher.</source>
        <translation type="unfinished">Une erreur s&apos;est produite lors de la demande de données à l&apos;API du serveur. Vérifiez que vous utilisez une version à jour d&apos;Inamata Flasher.</translation>
    </message>
</context>
</TS>
