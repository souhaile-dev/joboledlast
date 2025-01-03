// -- phpMyAdmin SQL Dump
// -- version 5.2.0
// -- https://www.phpmyadmin.net/
// --
// -- Hôte : 127.0.0.1
// -- Généré le : mer. 13 mars 2024 à 00:06
// -- Version du serveur : 10.4.24-MariaDB
// -- Version de PHP : 7.4.29

// SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
// START TRANSACTION;
// SET time_zone = "+00:00";
// -- Base de données : `l22on_toutalouer`
// -- Structure de la table `admins`
// CREATE TABLE `admins` (
//   `id` int(10) UNSIGNED NOT NULL,
//   `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//   `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//   `email_server` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//   `commission` int(20) NOT NULL,
//   `bank_swift_code` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
//   `bank_name` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
//   `bank_account_number` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
//   `facebook_link` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//   `gplus_link` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//   `twitter_link` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//   `ads_code` text COLLATE utf8_unicode_ci DEFAULT NULL,
//   `ads_code_side` text COLLATE utf8_unicode_ci DEFAULT NULL,
//   `ads_code_facebook` text COLLATE utf8_unicode_ci DEFAULT NULL,
//   `cgu` text CHARACTER SET utf8 NOT NULL,
//   `legal_mentions` text CHARACTER SET utf8 NOT NULL,
//   `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
//   `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
//   `created_at` timestamp NULL DEFAULT NULL,
//   `updated_at` timestamp NULL DEFAULT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

// -- Déchargement des données de la table `admins`
// INSERT INTO `admins` (`id`, `name`, `email`, `email_server`, `commission`, `bank_swift_code`, `bank_name`, `bank_account_number`, `facebook_link`, `gplus_link`, `twitter_link`, `ads_code`, `ads_code_side`, `ads_code_facebook`, `cgu`, `legal_mentions`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
// (1, 'Abdellatif', 'achir_abdellatif@hotmail.fr', 'no-reply@toutalouer.ma', 10, '6513', 'BMCE', '007 6659 6596 6594 4569 800', 'https://www.facebook.com/Toutalouerma-391352657677242/?fref=ts', 'https://www.google.com', 'https://www.twitter.com', '<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n<!-- toutes les pages (au dessus de menu) -->\r\n<ins class=\"adsbygoogle\"\r\n     style=\"display:block\"\r\n     data-ad-client=\"ca-pub-2451530216129674\"\r\n     data-ad-slot=\"6829341195\"\r\n     data-ad-format=\"auto\"\r\n     data-full-width-responsive=\"true\"></ins>\r\n<script>\r\n(adsbygoogle = window.adsbygoogle || []).push({});\r\n</script>', '<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n<!-- annonce côté droit et gauche des articles -->\r\n<ins class=\"adsbygoogle\"\r\n     style=\"display:inline-block;width:160px;height:600px\"\r\n     data-ad-client=\"ca-pub-2451530216129674\"\r\n     data-ad-slot=\"4310989063\"></ins>\r\n<script>\r\n(adsbygoogle = window.adsbygoogle || []).push({});\r\n</script>', '', '<p class=\"MsoNormal\" style=\"line-height: normal; font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; margin-bottom: 0pt; font-variant-ligatures: normal; font-variant-caps: normal;\"><span style=\"font-size: 12pt;\" roman\";mso-fareast-language:fr\"=\"\" mso-fareast-font-family:\"times=\"\" roman\",serif;=\"\" new=\"\" times=\"\"> </span></p><p style=\"font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; font-variant-ligatures: normal; font-variant-caps: normal;\"></p><p class=\"MsoNormal\" style=\"line-height: normal; font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; margin-bottom: 0pt; font-variant-ligatures: normal; font-variant-caps: normal;\"><span style=\"font-size: 12pt;\" roman\";mso-fareast-language:fr\"=\"\" mso-fareast-font-family:\"times=\"\" roman\",serif;=\"\" new=\"\" times=\"\"><br><br><span style=\"font-weight: 700;\">1. Définitions</span><br>Par utilisateur, nous entendons toute personne physique ou morale qui accède au site, que l’utilisateur soit membre ou non.<br>Par membre, nous entendons toute personne physique ou morale qui s’est inscrite sur le site afin d’en utiliser les services.<br>Par compte membre, nous entendons l’espace privé sur le site réservé à chaque Membre. Il est accessible par mot de passe et reprend notamment les données personnelles du membre.<br>Par mot de passe, nous entendons le mot de passe associé au membre ayant pour objet de l’identifier au regard des opérations réalisées sur le compte membre.<br>Par propriétaire, nous entendons tout Membre qui met en location un bien déterminé selon les modalités requise par le Site toutalouer.ma.<br>Par locataire, nous entendons tout Membre qui prend en location un bien sur le site<br>Par contrat de location, nous entendons la convention passée entre le propriétaire et le locataire faisant naitre pour l’un l’obligation de transfert de la jouissance de la chose (objet du contrat) et pour l’autre l’obligation d’en verser une contrepartie financière fixée au préalable ou inscrit au contrat.<br>Par demande de réservation, nous entendons l’option posée par le locataire sur une offre de location.<br>Par acceptation de la demande de réservation, nous entendons l’acceptation par le propriétaire de l’option posée par le locataire et suppose de fait dans le chef du propriétaire et du locataire d’un contrat de location pour un bien donné.<br>Par demande de devis, nous entendons une demande d’information et de prix à un membre professionnel pour une période donnée pour un objet ou un ensemble d’objet.<br>Par Loueur ou Membre Professionnel, nous entendons un membre inscrit en tant que loueur professionnel et dont l’une des activités principales est la location d’objet en tant que professionnel de la location.<br><br><br><span style=\"font-weight: 700;\">2. Description et fonctionnement du site</span><br><span style=\"font-weight: 700;\"><i>a. Description</i></span><br><br>toutalouer.ma est une place de marché de la location en ligne. toutalouer.ma permet aux particuliers et professionnels de mettre en location ou louer tout type de biens.<br>toutalouer.ma ne propose pas de services de location. Le site n’est qu’un support en ligne et se contente de mettre en relation des personnes désirant louer ou mettre en location un bien. Nous n’intervenons à aucun moment dans la transaction entre le locataire et le propriétaire. toutalouer.ma ne peut donc être considéré comme partie du contrat de location proprement dit entre membres du site.<br>Le site est constitué d’un espace public et d’un espace privé réservé aux membres.<br>L’espace public donne accès à des offres de locations émanant des membres, particuliers ou professionnels, inscrits sur le site.<br>L’espace privé correspond à la partie du site accessible après authentification. Il donne accès à la modification des informations personnelles, à la publication d’offres, à la réservation, à l’ajout de commentaires et la gestion des offres de location. Il permet en outre l’accès aux outils de collaboration.<br>b. Fonctionnement<br>Le membre de toutalouer.ma propriétaire (particulier ou loueur professionnel) dépose un ou plusieurs objets en ligne.<br>Le visiteur à la recherche d’un objet effectue une recherche, trouve l’objet désiré et prend connaissance de la fiche produit de l’objet.<br>La fiche produit de l’objet contient :<br>- une description la plus exhaustive possible réalisée par le membre propriétaire ;<br>- les principales caractéristiques, le cas échéant ;                                       <br>- le prix de l’objet (par jour, et en option, un forfait week-end, forfait semaine, forfait mois) ;<br>- les modes de paiement acceptés par le propriétaire ;<br>- le montant de la caution et les modalités de la caution le cas échéant ;<br>- des évaluations de l’objet et/ou du loueur le cas échéant ;<br>- les moyens de contacter le loueur.<br>                        <br><br>Plusieurs moyens de contacter le loueur sont proposés :<br>- pour un loueur particulier :<br>                             <br><br>o Réserver : la demande de réservation en ligne de l’objet ;<br>o Contacter le loueur par mail : la prise de contact avec le propriétaire directement afin notamment de lui demander des informations complémentaires sur les disponibilités – via les informations mises à disposition par le propriétaire.<br>                                  <br><br>Après validation du propriétaire de la demande de réservation,  le locataire reçoit un email de confirmation de la demande de réservation par courrier électronique.<br>- pour un loueur professionnel :<br>o Demander un devis : la demande de devis pour les objets dans une catégorie donnée (événement, véhicules, etc) ;<br>o Contacter le loueur : la prise de contact avec le propriétaire directement afin notamment de lui demander des informations complémentaires sur les disponibilités – via l’utilisation des données de contact ;<br>o Consulter le site : le renvoi sur le site professionnel du propriétaire.<br><br>Selon le type de propriétaire, les parties à la location évaluent ensuite l’ensemble de la transaction.<br>3. Condition d’inscription et Statut de membre<br>Nos services sont réservés aux personnes, physiques et morales, juridiquement capables ou autorisés de souscrire des contrats de location. Nos services ne sont pas disponibles pour les mineurs. Si vous ne remplissez pas ces conditions, vous ne devez pas utiliser nos services. De plus, sans préjudice à d’autres recours, nous nous réservons le droit de suspendre ou de clôturer unilatéralement et sans préavis le compte d’un membre pour des raisons d’opportunité commerciale ou pour tout motif visés ci-dessous :<br>/ Violation d’une disposition des Conditions Générales ainsi que des autres Conditions ou règlements de toutalouer.ma (Respect de la Vie privée, Conditions de Paiement, Règle de mise en location, etc.)<br>/ Authentification ou vérification impossible de l’origine d’une offre de location<br>/ Données personnelles fausses<br>/ Diffusion de contenu illégal (notamment pornographie, diffamation, atteinte au droit à l’image, discriminations, incitation à la violence ou à la haine raciale, religieuse ou ethnique)<br>/ Atteinte aux bonnes mœurs<br>/ Utilisation, copie ou diffusion d’œuvres protégées par les droits d’auteur sans autorisation expresse<br>/ Utilisation abusive ou frauduleuse des outils de collaboration (spam de commentaires, spam de clics etc.)<br>Cette fermeture d’un compte ne peut donner lieu à aucune indemnité quels que soient les éventuels dommages occasionnés par la fermeture de ce compte. Le compte membre est personnel et non cessible.<br>La suspension temporaire ou définitive d’un compte membre empêche toute utilisation des services de toutalouer.ma.<br>Le statut de membre permet, quant à lui, d’accéder, grâce à un mot de passe, à l’espace privé du site. Chaque membre est invité à choisir un alias (nom d’utilisateur) permettant d’être identifié sur le site.<br>Le membre s’engage à garder confidentiel le mot de passe sélectionné pour l’utilisation du compte de membre. Le compte membre et le mot de passe sont personnels et ne peuvent être partagés, communiqués ni transférés à aucune autre personne physique ou morale.<br>Le membre reconnaît et accepte d’être seul responsable de toutes les utilisations de son mot de passe et de son compte membre. Il accepte d\'être responsable de toutes les conséquences ou obligations résultant de l’utilisation de son mot de passe et de son compte membre par un tiers.<br>Le membre reconnaît et accepte également que le site puisse considérer l’utilisation de son compte membre, de son nom de membre ou de son mot de passe comme une preuve de l’utilisation du site par ce membre. Toute utilisation du service au moyen de ces éléments propres au membre est donc réputée avoir été effectuée par le membre.<br>Chaque profil d’évaluation et commentaires sont également personnels au membre.<br>L’inscription implique notamment l’obligation de fournir une adresse courriel qui sera utilisée comme moyen de communication entre le membre et le site et fera office d’identifiant unique du compte membre. Tout courriel envoyé par le site à un membre est réputé avoir été reçu par le membre qui est ainsi réputé en avoir pleinement pris connaissance.<br>De plus, afin de pouvoir exploiter l’outil de localisation sur le site de manière la plus efficace possible, une adresse physique est demandée par toutalouer.ma lors de l’inscription à l’espace privé et de la mise en ligne d’offre de location par le propriétaire, ce que le membre accepte.<br>Afin de maximiser la confiance dans le cadre de la location, l’adresse du locataire lorsqu’elle a été renseignée peut s’afficher dans le compte du propriétaire lors de confirmation de la demande de réservation.<br>Les coordonnées d’un propriétaire particulier ne s’affichent pas sur le site. En revanche, dans le cadre de la mise en relation, une fois la demande de réservation effectuée et l’acompte versé, les coordonnées du propriétaire sont alors communiquées au locataire et réciproquement, ce que propriétaire et locataire acceptent expressément.<br>4. Tarifs<br>L’accès, l’inscription et l’utilisation du site sont gratuits.<br>Sauf offre promotionnelle explicitement stipulée sur le site de toutalouer.ma, une commission est due lorsqu’un contrat de location est confirmé entre un locataire et un propriétaire.<br>Le prix affiché sur le site est le prix total à payer par le locataire, commission incluse le cas échéant.<br>a. Acompte sur les transactions<br>Après validation d’une demande de réservation sur le site, il est indispensable de verser le montant de l\'acompte par le locataire, Effectuer une demande de réservation validée sans verser le montant de l\'acompte est une infraction aux conditions générales d’utilisation du site. toutalouer.ma se réserve alors le droit de réclamer le montant ou de supprimer le compte du ou des membres incriminés.<br>Le montant de la commission de site est fixé à 15 % TTC du montant total TTC de la transaction affiché au locataire.<br>Le montant total de la location inclut la commission de site.<br>Le montant de la commission s’entend TTC, soit au taux de 20 %.<br>Le mode de paiement est repris au chapitre 20. Facture et Paiement<br>                    <br><br>5. Modèle de contrat – contrat standard<br>Dans le cadre de la procédure de location entre un propriétaire particulier et un locataire, toutalouer.ma met à disposition des cocontractants, propriétaires et locataires, selon le type de produit mis en location un contrat de location standard. Ce dernier inclut selon le type de location des informations sur la transaction tel la caution, la durée de la location, le prix de la location ainsi que tout autre élément nécessaire à la réalisation d’un contrat de location. Il s’agit d’un outil mis à disposition par toutalouer.ma à titre purement indicatif. toutalouer.ma se décharge de toute responsabilité quant au modèle et à son contenu et à l’utilisation qui peut en être faite, chaque location nécessitant un contrat propre adapté à la transaction et au droit qui lui est applicable. Les propriétaires et les locataires sont invités à cet égard à prendre conseil professionnel à cet égard auprès de leur conseiller juridique.<br>6. Cas Particulier – La location de voiture<br>a. Fonctionnement<br>1. Le propriétaire, au moment de la mise en ligne, choisit d’exiger ou non une assurance des futurs locataires de son véhicules.<br>2. En cas de location d’une voiture à un particulier (catégorie Voiture sur le site toutalouer.ma), la réservation s’effectue de la même manière que pour tout autre objet.<br>3. Une fois la demande de réservation effectuée en ligne, locataire et propriétaire obtiennent les coordonnées du propriétaire pour fixer les détails pratiques de la location et conclure la transaction.<br>4. Si le locataire a choisi d’exiger la souscription d’une assurance complémentaire par le locataire de son véhicule, le locataire est amené à souscrire cette assurance sur le site et à présenter son attestation au propriétaire au moment de l’échange de l’objet.<br>Si le propriétaire n’exige pas d’assurance de la part du locataire, il prend la responsabilité de couvrir son véhicule via sa propre assurance ou une autre en cas d’incident. Il s’engage à vérifier auprès de son assureur qu’il dispose de toutes les autorisations et couvertures pour le faire. Il s’engage par ailleurs à fournir au locataire au moment de l’échange des clés, tout papier attestant de la bonne couverture de son véhicule par l’assurance.<br>b. Modèle de Contrat Standard de location de véhicule<br>Un modèle de contrat standard de location de véhicule spécifique est mis à disposition des locataires et propriétaire. Au même titre que le contrat de location standard de bien, il s’agit d’un outil mis à disposition par toutalouer.ma à titre purement indicatif. toutalouer.ma se décharge de toute responsabilité quant au modèle et à son contenu et à l’utilisation qui peut en être faite, chaque location nécessitant un contrat propre adapté à la transaction et au droit qui lui est applicable. Les propriétaires et les locataires sont invités à cet égard à prendre conseil professionnel à cet égard auprès de leur conseiller juridique.<br>7. Responsabilité de toutalouer.ma<br>a. Le rôle de toutalouer.ma<br>toutalouer.ma n\'est pas une société de location. En effet, toutalouer.ma héberge seulement le contenu des annonces mises en ligne par les propriétaires (textes, images, etc.) et le site n’est donc qu’une plate-forme électronique mise à disposition de ses utilisateurs, en vue de mettre en contact propriétaires<br>et locataires de biens. Nous n\'exerçons en tout état de cause aucun contrôle sur la qualité, la sécurité ou la licité des objets répertoriés, la véracité ou l\'exactitude des annonces mises en ligne, la capacité des propriétaires à louer lesdits biens ni la capacité des locataires à louer ou à payer la location desdits biens. Nous ne pouvons pas assurer que le locataire conclura effectivement la transaction. Tout dépôt de garantie ou caution requise par le propriétaire, sous quelque forme que ce soit reste la responsabilité exclusive du propriétaire. toutalouer.ma ne prend en aucun cas en charge un tel dépôt de garantie sous quelque forme que ce soit, ni le contrôle de l’identité exacte du propriétaire ou du locataire, ou encore la collecte des montants dus par le locataire au propriétaire, voire l’inverse, le cas échéant.<br>b. Fiabilité des transactions et prudence des membres<br>toutalouer.ma ne peut pas confirmer l\'identité de chaque membre. toutalouer.ma met à disposition de ses membres et utilisateurs un système dit de \"commentaires\" ou \"évaluations\" pour leur permettre d\'évaluer la personne avec qui ils traitent à l\'issue d\'une transaction ou pendant celle-ci. Les locataires et/ou propriétaire ont ainsi la possibilité de mettre en ligne leurs commentaires sur les membres avec lesquels ils ont effectué leurs transactions. Cette évaluation positive pourra être pour certains propriétaires, une condition à la location de leurs biens. L’évaluation s’appliquera également au propriétaire afin, pour les locataires, d’évaluer le propriétaire pendant ou à l’issue de la transaction dite « location ».<br>L’objet ou le bien loué peut également être évalué à l’issue de la transaction.<br>c. Décharge de responsabilité<br>Puisque toutalouer.ma n\'intervient pas dans les transactions entre propriétaire et locataire, les membres dégagent toutalouer.ma de toute responsabilité (ainsi que sa maison mère, ses filiales éventuelles et sociétés du groupe, mandataires sociaux, directeurs, agents et employés) en cas de litige entre plusieurs membres, de réclamation, ou tout dommage présent ou futur, présumé ou non, constaté ou non, résultant de manière directe ou indirecte de l’utilisation des services de toutalouer.ma.<br>d. Limitations des responsabilités<br>Le site fournit des informations, recommandations, commentaires qui peuvent être inexacts, dépassés, incomplets, offensants, dommageables ou trompeurs : toutalouer.ma décline toute responsabilité sur les contenus dont il ne peut vérifier la véracité, l’authenticité ou l’exhaustivité. La responsabilité du site n’est en rien engagée quant aux qualités réelles ou supposées des produits et services proposés par ses membres. Faites donc toujours preuve de prudence et de bon sens quand vous utilisez le site. N’oubliez jamais qu’il se peut que vous ayez affaire à des mineurs ou à des personnes malintentionnées. Si vous utilisez le site, vous convenez que toutalouer.ma n’est pas responsable des actes ou omissions des utilisateurs et des membres et acceptez les risques visés dans les présentes Conditions Générales et le présent article.<br>toutalouer.ma ne donne aucune garantie relative au fonctionnement ou aux matériels et logiciels utilisés que ce soit sur les sites hébergés, serveurs ou tout accès Internet et n’est en aucun cas responsable des bénéfices escomptés ou non, réels ou non résultant de l’utilisation du site.<br>toutalouer.ma ou ses directeurs, administrateurs, employés, propriétaires, mandataires, représentants, ne sont pas tenus pour responsables des dommages directs, accessoires, indirects matériels ou immatériels, suite à l’utilisation du site, même si lesdites parties ont été informées de la possibilité, de tels dommages.<br>toutalouer.ma n’approuve ni ne valide les transactions effectuées sur le site et les membres et utilisateurs sont seuls responsables de la légalité de leurs actes. toutalouer.ma n’accepte aucune responsabilité liée à une éventuelle dangerosité ou défectuosité des objets mis en location sur le site, pouvant porter atteinte à la santé ou à l’intégrité physique et n’apporte aucune garantie à ce sujet. N’en déduisez donc pas que tous les objets mis en location sont sans danger pour les personnes ou leurs biens. Les membres et utilisateurs sont seuls responsables du contrôle et de la vérification que les objets offerts en location et loués sont bien autorisés à la location en vertu des législations applicables.<br>toutalouer.ma ne fait aucune déclaration ou garantie, expresse ou tacite, concernant le site, les offres de location, leur présentation ou leur contenu, y compris la garantie de qualité marchande, d’aptitude à un emploi particulier, la non-violation du droit d’auteur, de marques commerciales ou d’autres droits de propriété intellectuelle, la liberté de tous les services, les travaux ou autres matériels de contenu, contre les virus, les vers, les chevaux de Troie ou tout autre code aux traits hostiles, perturbateurs ou destructeurs.<br>Sans préjudice des stipulations prévues au paragraphe précédent, toutalouer.ma ne peut être tenu pour responsable d’aucune perte ou altération de données, d’aucune perte de profit, de chiffre d’affaires, de temps, d’opportunité ou de tout autre dommage indirect, que ladite perte ou ledit dommage résulte d’une négligence ou de toute autre cause.<br>8. bis. Responsabilité des membres et utilisateurs<br>Les membres et utilisateurs s’engagent à n’utiliser le site et/ou l’espace membre ainsi que l’ensemble des informations auxquelles ils pourront avoir accès qu’en conformité avec les stipulations des présentes conditions générales d’utilisation.<br>Les membres et utilisateurs sont seuls responsables de leur utilisation du site et des évaluations et commentaires et doivent respecter les règles des présentes conditions générales d’utilisation ainsi que les législations et réglementations en vigueur.<br>Les membres et utilisateurs s’engagent à n’utiliser le service ainsi que l’ensemble des informations auxquelles ils pourront avoir accès, que dans un but conforme à l’ordre public, aux bonnes moeurs et aux droits des tiers.<br>Les membres et utilisateurs s’engagent à ne pas perturber l’usage que pourraient faire les autres utilisateurs et membres du site et/ou de l’espace membre, de ne pas accéder aux comptes membre tiers et de ne pas accéder à des parties du site dont l’accès est réservé.<br>Les membres et utilisateurs s’engagent à ne commettre aucun acte pouvant mettre en cause la sécurité informatique de toutalouer.ma ou des autres utilisateurs.<br>Les membres et utilisateurs s’engagent à ne pas collecter, utiliser, ou effectuer un traitement quelconque des données personnelles des autres utilisateurs.<br>Les membres et utilisateurs se doivent de tenir des propos mesurés en toutes circonstances, et notamment lors de leur utilisation du système dit de « commentaires » ou d‘« évaluations » des propriétaires.<br>Il est interdit de tenir des propos diffamatoires, insultants, déplacés, injurieux et notamment mais non exclusivement :<br>- haineux, racistes, xénophobes, pédophiles, homophobes, révisionnistes ou portant atteinte à l’honneur ou à la réputation d’autrui, menaçant une personne ou un groupe de personnes ;<br><br><br>- des propos incitant à la discrimination, à la haine d’une personne ou d’un groupe de personnes notamment en raison de leur origine, de leur appartenance ou non à une ethnie, une nation, une race ou une religion déterminée ou faisant l’apologie des crimes de guerre ou des crimes contre l’humanité, contraires à l’ordre public ou aux bonnes moeurs ;<br><br><br>- des propos destinés à encourager, aider, colporter ou propager de quelque manière que ce soit des rumeurs et/ou violant le caractère privé des correspondances et de ce fait, en portant atteinte aux droits de tiers, propriété intellectuelle, vie privée, droit à l’image ;<br><br><br>- des propos portant atteinte à des mineurs ;<br><br><br>- des propos incitant à la maltraitance et/ou l’attaque d’individus ou d’animaux ;<br><br><br>- des propos incitant au suicide ou à la réalisation d’actions violentes contre l’utilisateur lui-même ou autrui.<br><br><br>Tout contenu diffusé sur le site qui serait contraire aux présentes conditions générales d’utilisation doit faire l’objet d’un signalement auprès de toutalouer.ma par courrier électronique à l’adresse suivante contact@ toutalouer.ma.<br>9. Conclusion du contrat de location<br>La location d’un bien entre un propriétaire et un locataire mis en présence grâce au site ne peut se faire que via le site par le biais de la demande de réservation et le paiement d’un acompte.<br>Le propriétaire est libre de choisir avec qui il souhaite conclure son contrat de location. Toutefois, dès l’acceptation de la demande de réservation par le propriétaire au locataire et le contrat ainsi conclu, la législation applicable au contrat variera selon le lieu de la location. Le propriétaire et le locataire sont seuls responsables de la détermination de la loi applicable et de son application conforme. Au besoin, ils doivent se faire conseiller par un professionnel.<br>10. Actes frauduleux<br>Sans exclure d\'autres voies de recours, nous pouvons suspendre ou clôturer votre compte membre s\'il s\'avère (suite à une condamnation, transaction, ou enquête de police, d\'une compagnie d\'assurance ou d\'un tiers, de séquestre notamment) que vous êtes engagé dans des activités frauduleuses en rapport avec notre site.<br>11. Localisation et vie privée<br>L’une des nombreuses fonctions à valeur ajoutée du site toutalouer.ma est la recherche d’un article en location via un outil de localisation. toutalouer.ma ne fournit l’adresse du propriétaire ou du lieu de location qu’une fois le paiement est effectué.<br>L’outil Google Maps renseignera au niveau visuel l’adresse via une flèche indicative. Cette flèche indicative pourra renseigner l’adresse sur la carte à plusieurs mètres près. L’objectif de cette imprécision est la protection nécessaire de l’adresse physique du propriétaire. Cela constitue une assurance supplémentaire en termes de sécurité des biens mis en location. Ceci complète les dispositions propres à la protection de la vie privée reprises dans ces Conditions Générales.<br>12. Modification<br>toutalouer.ma se réserve le droit, sans aucune limite ou restriction, et à sa seule discrétion de modifier à tout moment les Conditions Générales du site, en totalité ou en partie. Tous ces changements seront effectifs à compter de leur publication sur le site. L’utilisation du site à l’issue de la mise en place desdits changements implique une reconnaissance et une acceptation des Conditions Générales de Paiement, telles que modifiées. Les Conditions Générales du site figurant en ligne sur le site prévalent sur toute version imprimée de date antérieure. toutalouer.ma se réserve le droit de modifier, interrompre ou mettre un terme à tout instant au service sans être en aucune façon responsable des conséquences résultant des modifications, interruptions ou arrêt desdits services.<br>13. Utilisation des applications externes<br>L’utilisation de l’application Google Maps est subordonnée à l’acceptation implicite des Conditions Générales d’utilisation de Google Maps (<a href=\"http://maps.google.fr/help/terms_maps.html\" target=\"_blank\"><span style=\"color: blue;\">http://maps.google.fr/help/terms_maps.html</span></a>)<br>Les informations sur les cartes obtenues via Google sont fournies uniquement à titre indicatif.<br>14. Propriété intellectuelle<br>toutalouer.ma ne peut prendre connaissance du contenu de toutes les offres de location ou commentaires publiés sur le site. Cependant, toutalouer.ma s’engage à retirer le plus vite possible un contenu protégé par des droits d’auteur dès que l\'ayant droit le lui aura signalé. Toute notification de contenus illicites ou protégés par des droits d’auteur auprès de toutalouer.ma doit obligatoirement indiquer les informations suivantes :<br>- la date de la notification ;<br>- si le notifiant est une personne physique : ses nom, prénoms, profession, domicile, nationalité, date et lieu de naissance ;<br>- si le notifiant est une personne morale : sa forme, sa dénomination, son siège social et l’organe qui la représente légalement ;<br>- les noms et domicile du destinataire ou, s’il s’agit d’un personne morale, sa dénomination et son siège social ;<br>- la description des faits litigieux et leur localisation précise (avec copie de l’adresse URL précise du contenu;<br>- les motifs pour lesquels le contenu doit être retiré, comprenant la mention des dispositions légales et des justifications de fait ;<br><br><br><br>- la copie de la correspondance adressée à l’auteur ou à l’éditeur des informations ou activités litigieuses demandant leur interruption, leur retrait ou leur modification, ou la justification de ce que l’auteur ou l’éditeur n’a pu être contacté.<br><br><br>Le membre ou l’utilisateur peut signaler un tel contenu en respectant les informations visées au présent article par courrier à l’adresse suivante :<br>Ibdaa communication<br>Technopark, Bureau 405<br>20169 Casablanca<br>Il est rappelé que le fait, pour toute personne, de présenter un contenu ou une activité comme étant illicite dans le but d\'en obtenir le retrait ou d\'en faire cesser la diffusion, alors qu\'elle sait cette information inexacte, est susceptible de faire l’objet de sanctions conformément à la législation en vigueur.<br>La marque toutalouer.ma est une marque déposée et est la propriété exclusive de Ibdaa communication.<br>Les présentes conditions générales de site n’emportent aucune cession d’aucune sorte de droits de propriété intellectuelle sur les éléments appartenant à Ibdaa communication.<br>Le contenu du site web et notamment mais non exclusivement les textes, marques, photographies, vidéos, logiciels et programmes, mises en page, présentation, sons, musiques, graphismes, mise en page, charte graphique, logos propres , logiciels, les bases de données, design ou toute autre information ou support présenté par Ibdaa communication sont la propriété de toutalouer.ma et sont protégés par leurs droits d\'auteurs, marque, brevet et tout autre droit de propriété intellectuelle ou industrielle qui leur sont reconnus selon les lois en vigueur. Toute reproduction et/ou représentation, totale ou partielle d’un droit de propriété intellectuelle de Ibdaa communication, sans l’autorisation expresse de Ibdaa communication est interdite et constituerait une contrefaçon. Les utilisateurs ou membres ne peuvent en aucun cas utiliser, imprimer ou reformater le contenu du site et du compte membre à des fins autres que privées ou familiales. Ils s’engagent notamment à ne pas télécharger, reproduire, transmettre, vendre ou distribuer le contenu du site et du compte membre.<br>15. Informatique et libertés<br>L’inscription au compte membre nécessite la communication par l’utilisateur de données à caractère personnel. L’utilisateur s’engage à ce titre à ne communiquer que des informations loyales et licites. Tout utilisateur dispose d\'un droit d\'accès, d’interrogation, de modification, de rectification des données le concernant et d’un droit d’opposition pour motifs légitimes et à ce que les données soient utilisées à des fins de prospection, notamment commerciale.<br>L’utilisateur peut exercer ces droits à tout moment auprès de : Ibdaa communication, Technopark, Bureau 405, Casablanca par demande écrite et signée à laquelle est jointe une photocopie d’une pièce d’identité signée.<br>16. Utilisation des données et contributions des membres<br>En utilisant les services de toutalouer.ma, vous êtes amenés à nous transmettre ou à transmettre à d’autres utilisateurs des données et informations concernant les services de toutalouer.ma, dont notamment votre<br>Inscription, les offres de location et les locations, les évaluations et commentaires, vos messages ou toute autre information que vous mettez en ligne sur le site. Vous seul êtes responsable de ces informations, toutalouer.ma ne jouant qu\'un rôle d’intermédiaire passif pour leur mise en ligne.<br>Vos contributions sont protégées par vos droits d’auteur et tout autre droit de propriété intellectuelle ou industrielle reconnus selon les lois en vigueur. Vous cédez, à titre gratuit et non exclusif l’ensemble des droits de propriété intellectuelle afférents aux diverses contributions à Ibdaa communication. Cette cession concerne le monde entier, pour toute la durée de protection légale des droits de propriété intellectuelle. Les droits cédés comprennent :<br><< pour le droit de reproduction : le droit de reproduire, de faire reproduite ou d’autoriser un tiers à reproduire, sans limitation de nombre, tout ou partie des contributions des utilisateurs, sur tout support connu ou inconnu, notamment support papier, optique, numérique ou tout autre support informatique ou électronique ; >><br><< pour le droit de représentation : le droit de représenter/diffuser, de faire représenter/diffuser ou d’autoriser un tiers à représenter/diffuser tout ou partie des contributions par tout moyen et/ou support connu ou inconnu, électronique, numérique, informatique, de télécommunications et ce, auprès de tout public et pour tout réseau de télécommunications ; >><br><< pour le droit d’usage : le droit de faire usage, à titre personnel ou au bénéfice de tiers, tout ou partie des contributions, aux fins d’effectuer toute forme de traitement, à quelque titre que ce soit. >><br>Pour l’ensemble des droits susvisés, sont compris notamment les vecteurs de communication et les supports de toute nature, connus ou inconnus, tels que la diffusion directe ou indirecte par tout moyen électronique, de télécommunication et de communication électronique, satellitaire ou par câble, sous forme télévisuelle, par voie hertzienne terrestre ou spatiale, analogique ou numérique, sous toute forme, telles que télévision, radio, intranet, internet, ADSL, WAP, i-mode, Smartphone, GSM, GPRS, UMTS et sur tout support présent et à venir, notamment papier, électronique, magnétique, disque, réseau, disquette, DVD, CDV, CDI, CD Rom, CD Worm.<br>Cette licence accordée est cessible aux tiers.<br>Afin de permettre une interaction entre tous les membres, notre système autorise un accès limité aux informations de contact des autres utilisateurs.<br>En acceptant les présentes Conditions Générales, vous acceptez de n’utiliser les informations personnelles des autres utilisateurs qui vous sont fournies via le site ou via une communication ou transaction uniquement pour (a) effectuer une communication en vue de la conclusion d’une transaction qui ne comporte pas de message commercial non sollicité mais qui n’a trait qu’à une transaction existante, (b) les services proposés par des tiers via toutalouer.ma (séquestre, courrier et réclamations en cas de fraude) et (c) toute autre utilisation que l’utilisateur concerné a expressément autorisée après explication sincère et fidèle de son but. Par ailleurs, vous ne pouvez utiliser ces informations qu’en accord avec toutes les lois et tous les règlements d’application, y compris la loi sur le respect de la vie privée. Vous devez toujours permettre aux utilisateurs d’être rayés de votre base de données et de consulter les informations que vous avez rassemblées à leur sujet. Vous ne pouvez en aucun cas, sauf tel que stipulé ici, divulguer les informations personnelles d’un utilisateur à des tiers sans notre consentement, sans le consentement de l’utilisateur et sans notification claire. Par ailleurs, nous sommes expressément autorisés de divulguer des informations<br>personnelles afin de pouvoir être en mesure de répondre à des exigences légales et réglementaires en vigueur et à toute réquisition ou requête judiciaire ou administrative, d’appliquer nos règles, de répondre à une réclamation basée sur le fait notamment qu’une annonce ou autre contenu enfreint les droits de tiers ou de garantir les droits, la propriété ou la sécurité de tiers.<br>toutalouer.ma et les autres utilisateurs n’autorisent pas les spams ou autres messages commerciaux non sollicités. C’est pourquoi, nonobstant ce qui précède, vous ne pourrez pas ajouter à vos listes de mailing (e-mail ou courrier ordinaire) un membre ou un utilisateur sans leur consentement exprès préalable et écrit et sans notification claire, même si ce collaborateur ou cet utilisateur vous a acheté un objet. Vous pouvez signaler les spams via le système de support.<br>17. Indemnités<br>L’utilisateur ou le membre accepte de défendre et d’indemniser Ibdaa communication (y compris pour les frais raisonnables d’avocat), les mandataires sociaux, directeurs, administrateurs, employés, propriétaires, représentants, contre toute demande ou réclamation faite par un tiers, causée ou résultant d’une violation ou de toute autre responsabilité due à son manquement à l’une de ses représentations, garanties ou obligations dans le cadre de ces Conditions Générales ou d’une violation de toute loi ou règlement ou droit de ces tiers, y compris et sans limitation, les réclamations ou demandes en justice suivantes : enfreinte ou violation des droits de propriété intellectuelle, calomnie ou autre diffamation, droit à la vie privée ou « présentation sous un jour trompeur », droit de publicité.<br>Ibdaa communication a le droit, à sa seule discrétion, de diriger la défense de toute réclamation, demande en justice ou affaire qui fait l’objet d’une indemnisation par l’utilisateur ou le membre en faisant appel à un avocat de son choix.<br>18. Relations entre les parties<br>toutalouer.ma et les utilisateurs ou membres sont des parties indépendantes, chacune agissant en son nom et pour son propre compte. Les présentes Conditions Générales ne créent donc aucun lien de subordination, d’agence, de mandat, société en participation, entreprise commune, de relations employeur/employé ou franchiseur entre Ibdaa communication d’une part et l’utilisateur ou le membre d’autre part.<br>19. Condition pour contracter une location<br>Chaque cocontractant est âgé d’au moins 18 ans et déclare avoir la capacité juridique avant d’effectuer une location sur toutalouer.ma. Ibdaa communication ne saurait être responsable de tout accès ou inscription au site par des utilisateurs ne respectant pas ces exigences.<br>L\'utilisateur qui souhaiterait offrir un objet et/ou produit en location sur le site, déclare avoir la pleine capacité juridique lui permettant de s’engager au titre des présentes Conditions Générales et toutes les autorisations requises. Toute personne frappée d\'incapacité au sens du Code civil, ne peut en aucune façon louer et/ou mettre un objet et/ou produit à louer sur le site internet. La consultation du site internet et les services qu\'il offre se font dans ce cas sous la responsabilité de son représentant légal. Ce représentant légal est tenu de respecter les présentes. En tout état de cause, lors de la transmission de données personnelles, le représentant légal devra compiler lui-même le formulaire d\'inscription ou autoriser expressément la personne qu’il représente à remplir ledit formulaire, les stipulations relatives aux données personnelles telles que prévues ci-après trouvant bien entendu application.<br>20. Factures et paiement<br>a. Acompte<br>La confirmation d’une demande de réservation par le locataire est conditionnée par le versement du montant total de la location.<br>La commission, correspondant en tout ou partie au montant total de la location qui aura été payé par le locataire fait partie intégrante du prix affiché sur le site.<br>Ainsi, le montant de la location dû par le locataire au propriétaire correspond au prix affiché sur le site déduit de la commission qui est à la charge du locataire.<br>Le propriétaire s’y engage en acceptant ces conditions de paiement.<br>Une preuve de paiement sera à tout moment disponible via le compte membre du locataire dans l’onglet Mon activité.<br>L’acompte est débité si aucune annulation n’est intervenue.<br>Le paiement s’effectue par Amanty exclusivement.<br>b. Mode de paiement<br>Plusieurs méthodes sont à la disposition des membres pour régler leur facture :</span></p><p class=\"MsoNormal\" style=\"line-height: normal; font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; margin-bottom: 0pt; font-variant-ligatures: normal; font-variant-caps: normal;\"><span style=\"font-size: 12pt;\" roman\";mso-fareast-language:fr\"=\"\" mso-fareast-font-family:\"times=\"\" roman\",serif;=\"\" new=\"\" times=\"\">- Le paiement par carte bancaire sur la plateforme PAYZONE</span></p><p class=\"MsoNormal\" style=\"line-height: normal; font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; margin-bottom: 0pt; font-variant-ligatures: normal; font-variant-caps: normal;\"><span style=\"font-size: 12pt;\" roman\";mso-fareast-language:fr\"=\"\" mso-fareast-font-family:\"times=\"\" roman\",serif;=\"\" new=\"\" times=\"\">- Le paiement en espèces dans toutes les agences CashPlus en utilisant la plateforme PAYEXPRESS<br>- Le paiement en ligne par Votre compte AMANTY<br>- En espèces via l\'espace Tassshilat<br><br><br>c. Paiement<br>Pour tout problème concernant les paiements, merci de nous le faire savoir via le système de ticket dans la rubrique Contactez-nous .<br>21. Impôts, Taxes<br>A l’exclusion de toutalouer.ma qui n’est pas partie aux locations de biens, les utilisateurs, membres , locataires et propriétaires sont seuls redevables de tous les impôts, taxes et commissions résultant de l\'utilisation de nos services et de notre site. toutalouer.ma se dégage donc de toute responsabilité pour les taxes sur les transactions effectuées sur ou via son site.<br>Que vous soyez une personne morale (société) ou physique (particulier), ou que vous soyez un propriétaire ou un locataire, la TVA peut être applicable à vos transactions. En fonction de la fréquence de vos transactions, la TVA peut par exemple s’appliquer à vos transactions. D’autres taxes, telle la taxe professionnelle ou les charges sociales pourront alors aussi s’appliquer. Les membres du site reconnaissent expressément et acceptent que la TVA et ces autres taxes et charges puissent s\'appliquer à leur situation conformément à la législation applicable en vigueur.<br>Le membre s’engage à s’informer utilement auprès d’un tiers sur les aspects fiscaux des transactions en cause, de manière à respecter la législation.<br>a. Taxe sur la valeur ajoutée<br>De façon générale, la taxe sur la valeur ajoutée (TVA) s\'applique à tous les frais et commissions sur les transactions, payées par les locataires qui résident, disposent d\'une adresse permanente au Maroc.<br>Le taux de TVA appliqué par toutalouer.ma correspond au taux standard marocain (20 %).<br>22. Annulation de réservation<br>L’annulation d’une demande de réservation ou d’une location se fait directement via l’interface d’administration du site.<br>Le locataire et le propriétaire ont la possibilité d’annuler une demande de réservation pendant une période de 3 jours tant que la date de début de location n’est pas dépassée. Le montant à payer demandé au locataire ne sera alors pas débité.<br>Après confirmation de la demande de réservation à l’issue de la période de 3 jours par le propriétaire, le locataire a toujours la possibilité de renoncer à la location et de résilier la convention, selon les modalités convenues avec le propriétaire. Dans ce cas, la commission demandée au locataire, et débité lors de la confirmation de la demande de réservation ne sera pas remboursée. En cas d’annulation de la transaction par le propriétaire après acceptation par ce dernier de la demande de réservation du locataire, un système de recours est mis en place par toutalouer.ma. Pour bénéficier de ce système de recours, les membres peuvent contacter directement toutalouer.ma via la rubrique Contactez-nous .<br>toutalouer.ma se réserve le droit d’accepter ou de refuser le recours d’un membre.<br>Droit de rétractation relatif au service toutalouer.ma<br>L’utilisateur dispose d’un dé<br>lai de sept jours pour exercer son droit de rétractation, sans avoir à justifier de motifs, ni à payer de pénalités. Ce délai court à compter de la souscription du service. Dans tous les cas, si ce délai expire un samedi, un dimanche ou un jour férié ou chômé, il est prorogé jusqu’au premier jour ouvrable suivant. Toute première utilisation de la plate-forme par l’utilisateur prive la possibilité pour l’utilisateur d’exercer son droit de rétractation.<br>23. Garantie et responsabilité<br>toutalouer.ma fait tout son possible pour offrir le meilleur service qui soit. Toutefois, la responsabilité de toutalouer.ma ne pourra être retenue en cas de non-respect éventuel de nos obligations contractuelles du fait d’un cas fortuit ou de force majeure selon la législation en vigueur et la jurisprudence.<br>De façon expresse, sont considérés comme cas de force majeure ou cas fortuits, ceux habituellement retenus par la jurisprudence, ainsi que les événements suivants :<br>- la guerre, l’émeute, l’incendie, les grèves internes ou externes, lock out, occupation des locaux de Ibdaa communication, intempéries, tremblement de terre, inondation, dégât des eaux, restrictions légales ou gouvernementales, modifications légales ou réglementaires des<br><br><br><br>formes de commercialisation, les accidents de toutes natures, épidémie, pandémie, maladie touchant plus de 10% du personnel de Ibdaa communication dans un période de deux mois consécutifs, l’absence de fourniture d’énergie, l’arrêt partiel ou total du réseau Internet et, de manière plus générale, des réseaux de télécommunications privés ou publics, et tout autre cas indépendant de la volonté expresse des parties empêchant l’exécution normale des présentes Conditions Générales.<br>      <br><br>toutalouer.ma est responsable de tout dommage direct et prévisible au moment de l’utilisation du site. En aucun cas, toutalouer.ma ne peut être tenu pour responsable d’aucune perte ou altération de données, d’aucune perte de profit, de chiffre d’affaires, de temps, d’opportunité ou de tout autre dommage indirect, que ladite perte ou ledit dommage résulte d’une négligence ou de toute autre cause. La limitation de responsabilité visée ci-dessus est inapplicable en cas de dol ou de faute lourde de la part de toutalouer.ma.<br>24. Preuve des transactions<br>L’acceptation des Conditions Générales par voie électronique a, entre les parties, la même valeur probante que l’accord sur support papier. Les registres informatisés, conservés dans les systèmes informatiques de toutalouer.ma dans des conditions raisonnables de sécurité, seront considérés comme les preuves des communications, des commandes et des paiements intervenus entre les parties.<br>L\'archivage des documents contractuels et factures est effectué sur un support fiable et durable pouvant être produit à titre de preuve.<br>25. Droit applicable et Juridictions compétentes<br>Les présentes Conditions Générales sont régies et interprétées conformément au droit marocain. Il en est ainsi pour les règles de fond et les règles de forme.<br>Les présentes Conditions Générales sont rédigées en français.<br>Le pays de l’utilisateur et /ou le pays du membre avec qui il traite peuvent avoir des lois applicables à leurs transactions avec d’autres utilisateurs indépendantes des accords pris avec toutalouer.ma en vertu des présentes ou avec l’utilisateur ultérieurement.<br>La législation de ces pays peut différer du droit applicable aux présentes Conditions Générales, y compris la législation concernant les objets pouvant être légalement proposés à la location ou loués. Il peut y avoir des obligations légales supplémentaires comme (par exemple) l’obligation de détenir une autorisation d’offrir en location ou de louer certains objets ou d’enregistrer une location. Les utilisateurs et les membres sont tenus de respecter en permanence toutes les lois et tous les règlements nationaux et internationaux d’application à l’utilisation des services de toutalouer.ma et aux offres de location et aux locations. toutalouer.ma ne suit pas en permanence toutes les lois de chaque pays, ainsi que tous les utilisateurs ou toutes les transactions. Ce que les autres utilisateurs font ne permet pas de conclure qu’ils sont autorisés ni que toutalouer.ma approuve ou valide les transactions.<br>EN CAS DE LITIGE AVEC UN PROFESSIONNEL RELATIF A LA VALIDITE, L’INTERPRETATION OU L’EXECUTION DES PRESENTES CONDITIONS GENERALES, COMPETENCE EXPRESSE EST ATTRIBUEE AU TRIBUNAL DE COMMERCE DE CASABLANCA, NONOBSTANT PLURALITE DE DEFENDEURS OU APPEL EN GARANTIE, MEME POUR LES PROCEDURES D’URGENCE OU POUR LES PROCEDURES CONSERVATOIRES, EN REFERE OU PAR REQUETE.<br>Au cas où un ou plusieurs articles figurant dans les Conditions Générales seraient considérés comme non, valides, illégaux, inopposables ou inapplicables ou déclarés comme tels en application d’une loi, d’un règlement ou à la suite d’une décision de justice passée en force de chose jugée d’une juridiction compétente, les autres articles desdites Conditions Générales resteraient en vigueur et garderaient toute leur force et leur portée.<br>26. Stipulations diverses<br>+ toutalouer.ma contient des liens vers d’autres sites et n’est pas responsable des politiques de confidentialité ni des pratiques en la matière des autres sites. Lorsque le membre ou l’utilisateur du site clique sur un lien renvoyant à un autre site, le membre ou l’utilisateur est tenu de lire la politique de confidentialité dudit site.<br>+ toutalouer.ma n’est pas responsable des interactions entre membres.<br>+ Les membres du site peuvent être des particuliers ou des professionnels.<br>+ Les titres des différents articles des présentes Conditions Générales sont purement indicatifs sans déterminer nécessairement leur contenu.<br>+ Vous acceptez que les droits et obligations issus des présentes<br>Conditions Générales ainsi que de tous les documents qui y sont incorporés par référence pourront librement et de plein droit être cédés par toutalouer.ma à un tiers en cas de fusion, d’acquisition ou autre évènement.<br>+ En tout état de cause, en utilisant le site, vous engagez à respecter toutes les lois nationales, et internationales en vigueur relatives à l\'utilisation de nos services et à vos activités sur le site. En outre, vous reconnaissez expressément et acceptez que l’utilisation de nos services par vos soins puisse entraîner une qualification de commerçant au sens de la loi. Si vous êtes commerçant, vous êtes soumis à certaines obligations spécifiques, telles que l’inscription au registre du commerce, la tenue d’une comptabilité conformément aux règles applicables, le paiement de la TVA et des autres taxes et impôts applicables ainsi qu’aux dispositions de la loi en cas d’insolvabilité. Par ailleurs, en qualité de commerçant, ou plus généralement si vous utilisez le site en qualité de loueur professionnel, vous devez respecter la réglementation relative à la facturation et à la vente à distance ainsi que de manière générale l’ensemble des règles du droit de la consommation. Nous vous recommandons de consulter un avocat à ce sujet.<br>+ Aucune dérogation à ces Conditions Générales n’est autorisée, sauf par écrit et moyennant la signature d’un nouveau contrat par vous et par toutalouer.ma.<br>+ Toute notification qui vous est destinée sera envoyée par e-mail à l’adresse que vous avez communiquée à toutalouer.ma lors de votre inscription. Les notifications sont réputées vous être parvenues 24 heures après l\'envoi de l’e-mail, sauf si nous recevons un avis selon lequel l’adresse e-mail n’est pas correcte.<br>            <br><br>27. Les autres conditions et règlements de toutalouer.ma<br>Les Conditions d’Utilisation doivent être lues conjointement à tous les autres Conditions et règlements de toutalouer.ma. Ces Règlements et Conditions complètent les présentes Conditions d’Utilisation et ont également une valeur contractuelle. Vous pouvez les consulter en utilisant les liens ci-dessous :</span></p><p style=\"font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; font-variant-ligatures: normal; font-variant-caps: normal;\"></p><p class=\"MsoNormal\" style=\"line-height: normal; font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; margin-bottom: 0pt; font-variant-ligatures: normal; font-variant-caps: normal;\"><span style=\"font-size: 12pt;\" roman\";mso-fareast-language:fr\"=\"\" mso-fareast-font-family:\"times=\"\" roman\",serif;=\"\" new=\"\" times=\"\">Merci de votre intérêt pour toutalouer.ma.<br>toutalouer.ma est la propriété exclusive de la Société AYOUZ CONSULTING SARL AU  au capital de 10.000 Dh, Registre de commerce Casablanca 225 145, ci-après dénommée \"Nous\" ou « toutalouer » ou «toutalouer.ma». En utilisant les pages du site internet <a href=\"http://toutalouer.agadirbonsplans.com/\"><span style=\"color: blue;\">http://www.toutalouer.ma.ma</span></a> (ci-après le « site » ou «toutalouer.ma»), vous acceptez ces conditions générales. Si vous ne les acceptez pas, vous devez quitter immédiatement le site et ne l’utiliser en aucune manière.</span></p><p style=\"font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; font-variant-ligatures: normal; font-variant-caps: normal;\"></p><p class=\"MsoNormal\" style=\"line-height: normal; font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; margin-bottom: 12pt; font-variant-ligatures: normal; font-variant-caps: normal;\"><span style=\"font-size: 12pt;\" roman\";mso-fareast-language:fr\"=\"\" mso-fareast-font-family:\"times=\"\" roman\",serif;=\"\" new=\"\" times=\"\"> </span></p><p style=\"font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; font-variant-ligatures: normal; font-variant-caps: normal;\"></p><p class=\"MsoNormal\" style=\"line-height: normal; font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; font-variant-ligatures: normal; font-variant-caps: normal;\"><span style=\"font-weight: 700;\"><span style=\"font-size: 12pt;\" roman\";mso-fareast-language:fr\"=\"\" mso-fareast-font-family:\"times=\"\" roman\",serif;=\"\" new=\"\" times=\"\">Générales pour Membre Particulier</span></span></p><p></p>', '<p class=\"MsoNormal\" style=\"line-height: normal; font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; margin-bottom: 0pt; font-variant-ligatures: normal; font-variant-caps: normal;\"><span style=\"font-size: 12pt;\" roman\";mso-fareast-language:fr\"=\"\" mso-fareast-font-family:\"times=\"\" roman\",serif;=\"\" new=\"\" times=\"\"> </span></p><p style=\"font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; font-variant-ligatures: normal; font-variant-caps: normal;\"></p><p class=\"MsoNormal\" style=\"line-height: normal; font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; margin-bottom: 12pt; font-variant-ligatures: normal; font-variant-caps: normal;\"><span style=\"font-size: 12pt;\" roman\";mso-fareast-language:fr\"=\"\" \"times=\"\" new=\"\" times=\"\"><br>- Le présent site est édité par : <br><br>AYOUZ CONSULTING SARL, au capital social de 10,000 Dirhams, immatriculée au Registre du Commerce de Casablanca  sous le numéro 225145<br>e-mail : contact@toutalouer.ma, <br><br><br>2. CONDITIONS D’UTILISATION DU SITE<br><br><br>L’utilisateur reconnaît avoir pris connaissance des présentes et s’engage à les respecter. <br><br><br>L’utilisateur reconnaît disposer de la compétence et des moyens nécessaires pour accéder et utiliser ce site. <br><br><br>L’utilisateur reconnaît avoir vérifié que la configuration informatique utilisée ne contient aucun virus et qu’elle est en parfait état de fonctionnement. <br><br><br>AYOUZ CONSULTING met tout en œuvre pour offrir aux utilisateurs des informations ou des outils disponibles et vérifiés mais ne saurait être tenu pour responsable des erreurs, d’une absence de disponibilité des fonctionnalités ou de la présence de virus sur son site. <br><br><br>Les informations fournies par AYOUZ CONSULTING le sont à titre indicatif et ne sauraient dispenser l’utilisateur d’une analyse complémentaire et personnalisée. <br><br><br>AYOUZ CONSULTING ne saurait garantir l’exactitude, la complétude, l’actualité des informations diffusées sur son site. Les renseignements qui apparaissent sur le site sont fournis à titre de renseignements généraux. <br><br><br>AYOUZ CONSULTING fait tout son possible pour veiller à l\'exactitude et à la véracité des renseignements contenus sur le site et ne peut aucunement être tenu responsable de tout préjudice pouvant être causé par l\'utilisation de ce site. <br><br><br>AYOUZ CONSULTING fait appel à des sources fiables afin que les renseignements accessibles sur le site soient exacts et régulièrement tenus à jour. AYOUZ CONSULTING se réserve le droit de supprimer, changer ou modifier ce site en tout temps et sans préavis.<br><br><br>AYOUZ CONSULTING ne peut être tenue responsable d\'aucun préjudice, notamment de préjudices résultant de la transmission de documents sur Internet.<br><br><br>AYOUZ CONSULTING se réserve le droit de réviser, supprimer, modifier, valider ou changer, intégralement ou en partie, tout contenu envoyé au site internet ou affiché sur celui-ci.<br><br><br>En conséquence, l’utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive. <br><br><br>3. INFORMATIQUE ET LIBERTES<br><br><br>L’utilisateur est notamment informé, que AYOUZ CONSULTING, en tant que responsable du traitement, met en œuvre un traitement de données à caractère personnel ayant pour principales finalités la gestion de l’inscription de l’utilisateur au site communautaire, l’envoi de newsletters. <br><br><br>Certaines des données collectées pourront être communiquées à ses partenaires à des fins de prospection. <br><br><br>Les champs identifiés par un astérisque sont obligatoires. En l’absence de réponse ou si les informations fournies sont erronées, AYOUZ CONSULTING ne pourra pas traiter votre demande. <br><br><br>L’utilisateur est informé qu’il dispose d’un droit d’accès, d’interrogation, et de rectification qui lui permet, le cas échéant, de faire rectifier, compléter, mettre à jour, verrouiller ou effacer les données personnelles le concernant qui sont inexactes, incomplètes, équivoques, périmées ou dont la collecte, l’utilisation, la communication ou la conservation est interdite. <br><br><br>L’utilisateur dispose également d’un droit d’opposition au traitement de ses données pour des motifs légitimes ainsi qu’un droit d’opposition à ce que ces données soient utilisées à des fins de prospection commerciale. <br><br><br>L’ensemble de ces droits s’exerce auprès de par courrier postal accompagné d’une copie d’un titre d’identité comportant une signature : <br><br><br>- à l’adresse suivante : Bd ZERKTOUNI, 7, Rue Sebta, Bureau 8, Casablanca ; <br>- ou par mèl à l’adresse suivante : contact@ouinouin.ma ;<br><br><br>4. COOKIE<br><br><br>L’utilisateur est informé que lors de ses visites sur le site, un ou plusieurs cookies peuvent s’installer automatiquement sur son logiciel de navigation. <br><br><br>Le cookie est un bloc de données qui sert à enregistrer des informations relatives à la navigation de l’utilisateur sur le site. <br><br><br>Le paramétrage du logiciel de navigation permet d’informer de la présence d’un ou plusieurs cookies et éventuellement, de la refuser. <br><br><br>L’utilisateur peut, s’il le souhaite, activer ou désactiver l’utilisation de cookies en sélectionnant les paramètres appropriés de son logiciel de navigation. <br><br><br>Généralement, ce paramètre se retrouve dans les onglets « Outils », « Paramètres ». <br><br><br>Il n’est pas possible d’assurer une information détaillée et à jour de ces éléments de paramétrage qui sont sous le seul contrôle exclusif et l’autorité des éditeurs des logiciels de navigation. <br><br><br>A titre de renseignements, les utilisateurs peuvent disposer d’informations complémentaires : <br><br><br>- de la part des éditeurs de leur logiciel de navigation sur leur site internet ; <br>- de manière plus générale sur le site de la Cnil à l’adresse www.cnil.fr en utilisant le mot clé « cookies » dans les moteurs de recherche. <br><br><br>L’utilisateur est informé qu’une telle désactivation pourrait empêcher l’utilisation de certaines fonctionnalités du site. <br><br><br>L’utilisateur dispose d’un droit d’accès, de retrait et de modification des données à caractère personnel communiquées par le biais des cookies dans les conditions indiquées ci-dessus. <br><br><br>Il doit notamment s’abstenir, s’agissant des informations à caractère personnel auxquelles il accède ou pourrait accéder, de toute collecte, de toute utilisation détournée d’une manière générale, de tout acte susceptible de porter atteinte à la vie privée ou à la réputation des personnes. <br><br><br>5. HYPERLIENS<br><br><br>Les liens hypertextes mis en place dans le cadre du site web en direction d’autres ressources présentes sur le réseau Internet, et notamment vers ses partenaires, ont fait l’objet d’une autorisation préalable, écrite et expresse. <br><br><br>AYOUZ CONSULTING ne saurait être responsable de l’accès par les utilisateurs par les liens hypertextes mis en place dans le cadre du site internet en direction d’autres ressources présentes sur le réseau. <br><br><br>AYOUZ CONSULTING décline toute responsabilité quant au contenu des informations fournies sur ces ressources présentes sur le réseau au titre de l’activation des liens hypertextes. <br><br><br>L’utilisateur ne peut pas mettre en place un lien hypertexte en direction de ce site sans l’autorisation expresse et préalable de AYOUZ CONSULTING. <br><br><br>En aucun cas, cette autorisation ne pourra être qualifiée de convention implicite d’affiliation. <br><br><br>En toute hypothèse, les liens hypertextes renvoyant au site web devront être retirés à première demande de AYOUZ CONSULTING. <br><br><br>6. DROITS DE PROPRIETE INTELLECTUELLE ET CREDITS<br><br><br>Le site est la propriété exclusive de AYOUZ CONSULTING et constitue une œuvre dont l’éditeur du site est l’auteur au sens des dispositions du Code de la propriété intellectuelle. <br><br><br>Tous les droits afférents au site sont la propriété de AYOUZ CONSULTING. Il en est ainsi de l’ensemble des éléments concourant à la réalisation du site et à son animation, notamment les logiciels, textes, savoir faire, structure du site, principes de navigation, ergonomie, look and feel, rubricage, tous les éléments d’ordre contractuel et formulaires et tous les autres éléments composant le site. <br><br><br>Le site a été créé et développé par la société AYOUZ CONSULTING SARL. <br><br><br>Les éléments de contenu autres que ceux créés par AYOUZ CONSULTING ou par les utilisables du site à travers leurs contributions sont fournis par : <br><br>- pour les photos utilisées sur le site : AYOUZ CONSULTING SARL; <br>- pour les éléments sonores par : AYOUZ CONSULTING SARL ; <br>- pour les vidéos et autres réalisations visuelles animées par : SARL. <br><br>AYOUZ CONSULTING accorde à tout utilisateur un droit personnel, non exclusif et non cessible d’utiliser le site. Ce droit n’entraîne aucune cession de droits de propriété intellectuelle de quelque nature que ce soit <br><br><br>Toute représentation totale ou partielle de ce site ou l’un de ses contenus par quelque personne que ce soit, sans l’autorisation expresse de l’éditeur du site est interdite et constituerait une contrefaçon sanctionnée  Il en est de même des bases de données figurant, le cas échéant sur le site internet,<br><br><br>Les signes distinctifs de l’éditeur du site, tels que les noms de domaine, marque, dénomination ainsi que les logos figurant sur le site sont protégés par le Code de la propriété intellectuelle. <br><br><br>Toute reproduction totale ou partielle de l’un de ces signes effectuée à partir des éléments du site sans l’autorisation expresse de l’exploitant du site web est donc prohibée, au sen<br>du Code de la propriété intellectuelle.<br><br></span></p><p style=\"font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; font-variant-ligatures: normal; font-variant-caps: normal;\"></p><p class=\"MsoNormal\" style=\"line-height: normal; font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; font-variant-ligatures: normal; font-variant-caps: normal;\"><span style=\"font-size: 12pt;\" roman\";mso-fareast-language:fr\"=\"\" mso-fareast-font-family:\"times=\"\" roman\",serif;=\"\" new=\"\" times=\"\">1.INFORMATIONS LEGALES</span></p><p style=\"font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; font-variant-ligatures: normal; font-variant-caps: normal;\"><span class=\"span_grade5\"><br></span></p><p class=\"MsoNormal\" style=\"font-family: Sanchez; font-size: 14.44px; font-style: normal; font-weight: normal; font-variant-ligatures: normal; font-variant-caps: normal;\"> </p><div><br></div><p></p>', '$2y$10$8WllOON22gAk2UNbdyMCA.AkhjPLSEXtyZXSaspOdk3ratvmLsBUm', NULL, '2016-03-27 13:13:47', '2023-05-23 07:08:47');
// INSERT INTO `admins` (`id`, `name`, `email`, `email_server`, `commission`, `bank_swift_code`, `bank_name`, `bank_account_number`, `facebook_link`, `gplus_link`, `twitter_link`, `ads_code`, `ads_code_side`, `ads_code_facebook`, `cgu`, `legal_mentions`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
// (3, 'mourad azzouzi', 'mouradazzouzi01@gmail.m', '', 2, '', '', '', '', '', '', NULL, NULL, NULL, '', '', '$2y$10$wV2Jyce2fbM/SlJfHNhDcu1Vg32m9ShDlZOG54q5qYmhB7gomCC6a', NULL, '2023-10-03 22:27:55', '2023-10-03 22:27:55'),
// (111, 'Test', 'mouradazzouzi01@gmail.ma', 'rejedev839@htoal.com', 12, '', '', '', '', '', '', NULL, NULL, NULL, '', '', '$2y$10$7qRWvkV8pu9LwHKenpu7EORIKPU5o9sxPorOAD5L74qwQpbntEJG6', NULL, '2023-10-03 22:18:06', '2023-10-04 21:32:24');
// -- Structure de la table `cms_items`
// CREATE TABLE `cms_items` (
//   `item_id` bigint(100) NOT NULL,
//   `module_id` int(100) NOT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// -- Déchargement des données de la table `cms_items`
// INSERT INTO `cms_items` (`item_id`, `module_id`, `created_at`, `updated_at`) VALUES
// (15, 15, '2016-05-18 17:31:49', '2016-05-18 17:31:49'),
// -
// -- Structure de la table `cms_items_meta`
// CREATE TABLE `cms_items_meta` (
//   `meta_id` bigint(100) NOT NULL,
//   `item_id` bigint(100) NOT NULL,
//   `item_key` varchar(250) NOT NULL,
//   `item_value` text NOT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// -- Déchargement des données de la table `cms_items_meta`
// INSERT INTO `cms_items_meta` (`meta_id`, `item_id`, `item_key`, `item_value`, `created_at`, `updated_at`) VALUES
// (13, 15, 'question', 'Questions et réponses', '2016-05-18 17:31:49', '2023-10-04 13:02:06'),

// -- Structure de la table `cms_modules`
// CREATE TABLE `cms_modules` (
//   `module_id` int(100) NOT NULL,
//   `module_name` varchar(150) NOT NULL,
//   `module_display_name` varchar(200) NOT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
// -- Déchargement des données de la table `cms_modules`
// INSERT INTO `cms_modules` (`module_id`, `module_name`, `module_display_name`, `created_at`, `updated_at`) VALUES
// (15, 'faq', 'FAQ', '2016-05-18 17:04:55', '2016-05-18 17:04:55'),


// -- Structure de la table `cms_pages`
// CREATE TABLE `cms_pages` (
//   `id` int(100) NOT NULL,
//   `page_title` varchar(100) NOT NULL,
//   `page_slug` varchar(250) NOT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
// -- Déchargement des données de la table `cms_pages`
// INSERT INTO `cms_pages` (`id`, `page_title`, `page_slug`, `created_at`, `updated_at`) VALUES
// (11, 'Page 1', 'page-1', '2016-05-17 00:06:31', '2016-05-17 00:06:31'),

// CREATE TABLE `lrvl_ads_comments` (
//   `ads_comments_id` bigint(250) NOT NULL,
//   `ad_id` bigint(200) NOT NULL,
//   `user_id` bigint(20) NOT NULL,
//   `ad_comment` text NOT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Not used anymore.';
// -- Déchargement des données de la table `lrvl_ads_comments`
// INSERT INTO `lrvl_ads_comments` (`ads_comments_id`, `ad_id`, `user_id`, `ad_comment`, `created_at`, `updated_at`) VALUES
// (2, 58, 8, 'wxcwxc', '2016-08-01 15:57:19', '2016-08-01 15:57:19'),
// (20, 58, 8, 'super', '2016-08-02 12:51:35', '2016-08-02 12:51:35');
// -- Structure de la table `lrvl_ads_rating`
// CREATE TABLE `lrvl_ads_rating` (
//   `rating_id` bigint(20) NOT NULL,
//   `ad_id` int(100) NOT NULL,
//   `user_id` int(11) NOT NULL,
//   `rate` int(11) NOT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Not used anymore.';
// -- Déchargement des données de la table `lrvl_ads_rating`
// INSERT INTO `lrvl_ads_rating` (`rating_id`, `ad_id`, `user_id`, `rate`, `created_at`, `updated_at`) VALUES
// (1, 30, 8, 4, '2016-05-08 14:23:26', '2016-05-08 14:23:26'),
//  Structure de la table `lrvl_ad_pricings`
// CREATE TABLE `lrvl_ad_pricings` (
//   `id` int(11) NOT NULL,
//   `user_id` bigint(20) UNSIGNED NOT NULL,
//   `announce_id` bigint(200) NOT NULL,
//   `start_date` datetime DEFAULT NULL,
//   `end_date` datetime DEFAULT NULL,
//   `minute_price` decimal(10,2) DEFAULT NULL,
//   `price_hour` double(10,2) DEFAULT NULL,
//   `price_day` double(10,2) DEFAULT NULL,
//   `weekend_price` double(10,2) DEFAULT NULL,
//   `week_price` double(10,2) DEFAULT NULL,
//   `month_price` double(10,2) DEFAULT 0.00,
//   `max_min_duration_type` tinyint(2) DEFAULT NULL,
//   `min_duration` int(11) DEFAULT NULL,
//   `max_duration` int(11) DEFAULT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
// -- Déchargement des données de la table `lrvl_ad_pricings`
// INSERT INTO `lrvl_ad_pricings` (`id`, `user_id`, `announce_id`, `start_date`, `end_date`, `minute_price`, `price_hour`, `price_day`, `weekend_price`, `week_price`, `month_price`, `max_min_duration_type`, `min_duration`, `max_duration`, `created_at`, `updated_at`) VALUES
// (1, 63, 72, '2022-06-01 00:00:00', '2022-08-31 23:59:59', NULL, NULL, 600.00, 600.00, 3500.00, 15000.00, 0, 3, NULL, '2022-05-14 14:06:34', '2023-02-03 08:57:51'),
// (2, 63, 76, '2022-06-01 00:00:00', '2022-08-31 23:59:59', NULL, 0.00, 500.00, 600.00, 0.00, 0.00, NULL, NULL, NULL, '2022-05-14 14:10:15', '2022-05-14 14:10:15');

// -- Structure de la table `lrvl_announces`
// CREATE TABLE `lrvl_announces` (
//   `id` bigint(200) NOT NULL,
//   `user_id` bigint(20) NOT NULL,
//   `category` varchar(100) NOT NULL,
//   `primary_subcategory` varchar(200) NOT NULL,
//   `sub_category` varchar(100) NOT NULL,
//   `title` varchar(250) NOT NULL,
//   `description` text NOT NULL,
//   `slug` varchar(300) NOT NULL,
//   `images` text NOT NULL,
//   `address` text NOT NULL,
//   `city` varchar(80) NOT NULL,
//   `region` varchar(250) NOT NULL,
//   `lat` varchar(250) NOT NULL,
//   `lng` varchar(250) NOT NULL,
//   `currency` varchar(10) DEFAULT NULL,
//   `minute_price` decimal(10,2) DEFAULT NULL,
//   `price_hour` decimal(10,2) DEFAULT NULL,
//   `price_day` decimal(10,2) DEFAULT NULL,
//   `week_price` decimal(10,2) DEFAULT NULL,
//   `month_price` decimal(10,2) DEFAULT NULL,
//   `weekend_price` decimal(10,2) DEFAULT NULL,
//   `warranty` decimal(10,2) DEFAULT NULL,
//   `is_quotation` int(2) NOT NULL,
//   `additional_price_per_km` decimal(10,2) DEFAULT NULL,
//   `kilometer_per_day` int(11) DEFAULT NULL,
//   `min_duration` decimal(10,0) NOT NULL,
//   `max_duration` decimal(10,0) DEFAULT NULL,
//   `max_min_duration_type` tinyint(2) NOT NULL,
//   `is_active` tinyint(1) NOT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
// -- Déchargement des données de la table `lrvl_announces`
// INSERT INTO `lrvl_announces` (`id`, `user_id`, `category`, `primary_subcategory`, `sub_category`, `title`, `description`, `slug`, `images`, `address`, `city`, `region`, `lat`, `lng`, `currency`, `minute_price`, `price_hour`, `price_day`, `week_price`, `month_price`, `weekend_price`, `warranty`, `is_quotation`, `additional_price_per_km`, `kilometer_per_day`, `min_duration`, `max_duration`, `max_min_duration_type`, `is_active`, `created_at`, `updated_at`) VALUES
// (41, 49, 'hebergement', 'chambre-prive', '', 'auberge Sidi Kaouki', 'volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legenti', 'auberge-sidi-kaouki', '[\"IMG-20160512-WA0020.jpg\",\"IMG-20160512-WA0024.jpg\"]', 'Sidi Kaouki, Marrakech-Tensift-Al Haouz, Maroc', 'Sidi Kaouki', 'Marrakech-Tensift-Al Haouz', '31.3514195', '-9.797151100000065', NULL, NULL, '10.00', '350.00', '1500.00', '4553.00', NULL, '0.00', 0, NULL, NULL, '1', '10', 0, 0, '2016-05-25 14:06:19', '2016-10-28 15:05:02'),

// -- Structure de la table `lrvl_announces_features`
// CREATE TABLE `lrvl_announces_features` (
//   `features_id` bigint(200) NOT NULL,
//   `ad_id` bigint(200) NOT NULL,
//   `user_id` bigint(20) NOT NULL,
//   `brand` varchar(100) DEFAULT NULL,
//   `year` varchar(20) DEFAULT NULL,
//   `fuel_type` varchar(20) DEFAULT NULL,
//   `gear_type` varchar(40) DEFAULT NULL,
//   `horsepower` varchar(10) DEFAULT NULL,
//   `consumption` varchar(10) DEFAULT NULL,
//   `mileage` decimal(10,2) DEFAULT NULL COMMENT 'Kilomètrage',
//   `seatsNumber` varchar(10) DEFAULT NULL,
//   `doors_count` varchar(10) DEFAULT NULL,
//   `surface` varchar(3) DEFAULT NULL,
//   `rooms_count` varchar(3) DEFAULT NULL,
//   `accommodation_capacity` varchar(3) DEFAULT NULL,
//   `quantity` int(11) DEFAULT NULL COMMENT 'For Objects',
//   `options` text DEFAULT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// -- Déchargement des données de la table `lrvl_announces_features`
// --

// INSERT INTO `lrvl_announces_features` (`features_id`, `ad_id`, `user_id`, `brand`, `year`, `fuel_type`, `gear_type`, `horsepower`, `consumption`, `mileage`, `seatsNumber`, `doors_count`, `surface`, `rooms_count`, `accommodation_capacity`, `quantity`, `options`, `created_at`, `updated_at`) VALUES
// (5, 7, 0, 'Audi', '2009', 'Diesel', 'Manuelle', '8', '7', '0.00', '4', '', '', '', '', NULL, 'climatisation,lecteur-cd/dvd,abs,direction,assistée', '2016-04-01 13:35:58', '2016-04-01 13:35:58'),

// -- --------------------------------------------------------

// --
// -- Structure de la table `lrvl_availability_pricing`
// --

// CREATE TABLE `lrvl_availability_pricing` (
//   `availability_id` bigint(250) NOT NULL,
//   `ad_id` bigint(200) NOT NULL,
//   `user_id` bigint(20) NOT NULL,
//   `day_id` varchar(2) NOT NULL,
//   `is_available` int(2) NOT NULL,
//   `price_hour` decimal(10,2) DEFAULT NULL,
//   `price_day` decimal(10,2) DEFAULT 0.00,
//   `basic_price` decimal(10,2) DEFAULT NULL,
//   `available_from` time NOT NULL,
//   `available_to` time NOT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// --
// -- Déchargement des données de la table `lrvl_availability_pricing`
// --

// INSERT INTO `lrvl_availability_pricing` (`availability_id`, `ad_id`, `user_id`, `day_id`, `is_available`, `price_hour`, `price_day`, `basic_price`, `available_from`, `available_to`, `created_at`, `updated_at`) VALUES
// (19, 7, 0, '0', 1, '12.00', '0.00', '288.00', '00:00:00', '23:59:59', '2016-04-01 13:35:58', '2016-04-01 13:35:58'),

// -- --------------------------------------------------------

// --
// -- Structure de la table `lrvl_booking`
// --

// CREATE TABLE `lrvl_booking` (
//   `booking_id` bigint(200) NOT NULL,
//   `ad_id` bigint(200) NOT NULL,
//   `owner_id` bigint(20) NOT NULL,
//   `client_id` bigint(20) NOT NULL,
//   `book_from` datetime NOT NULL,
//   `book_to` datetime NOT NULL,
//   `payment_type` varchar(200) NOT NULL,
//   `booking_amount` decimal(10,2) DEFAULT NULL COMMENT 'Total price without warranty and fees',
//   `booking_warranty` decimal(10,2) DEFAULT NULL,
//   `booking_fees` decimal(10,2) NOT NULL,
//   `booking_final_price` decimal(10,2) NOT NULL COMMENT 'Booking final price (total + fees + warranty)',
//   `booking_quantity` int(250) NOT NULL,
//   `booking_status` varchar(2) NOT NULL,
//   `is_accessed` tinyint(2) NOT NULL,
//   `is_payed` tinyint(2) NOT NULL,
//   `is_cash` tinyint(2) NOT NULL,
//   `is_user_pro` tinyint(2) NOT NULL COMMENT 'Means if its the item owner is pro.',
//   `is_notified` tinyint(4) NOT NULL COMMENT 'Send a notification at the end of the reseervation to ask both the owner and the client to comment/rate the object.',
//   `booking_cancel_by_client` tinyint(2) NOT NULL,
//   `booking_message` text NOT NULL,
//   `transaction_id` varchar(250) DEFAULT NULL,
//   `callback_data` text DEFAULT NULL,
//   `merchant_token` varchar(250) NOT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// --
// -- Déchargement des données de la table `lrvl_booking`
// --

// INSERT INTO `lrvl_booking` (`booking_id`, `ad_id`, `owner_id`, `client_id`, `book_from`, `book_to`, `payment_type`, `booking_amount`, `booking_warranty`, `booking_fees`, `booking_final_price`, `booking_quantity`, `booking_status`, `is_accessed`, `is_payed`, `is_cash`, `is_user_pro`, `is_notified`, `booking_cancel_by_client`, `booking_message`, `transaction_id`, `callback_data`, `merchant_token`, `created_at`, `updated_at`) VALUES
// (133, 48, 8, 26, '2016-07-18 00:00:00', '2016-08-21 00:00:00', 'amanty-transaction', '15750.00', '0.00', '0.00', '0.00', 0, '2', 1, 1, 0, 0, 0, 0, '', '441647725757464679', '{\"type\":\"amanpay-amanty\",\"payment_type\":\"amanty-transaction\",\"merchant_id\":\"900021\",\"order_id\":\"120056\",\"transaction_id\":\"441647725757464679\",\"partner_transaction_id\":\"3974101\",\"partner_approval_code\":\"39307201\",\"amount\":\"15750\",\"currency\":\"MAD\",\"datetime\":\"2016\\/07\\/18 - 00:01:39\",\"client_email\":\"AmanPay920@amanty.ma\",\"client_login\":\"AmanPay920\",\"hmac\":\"3988f80e1d165c4474e7ad7da38ea598a173b14e\",\"description\":\"{&#39;bookingid&#39;: 133}\",\"products_ids\":\"\"}', '', '2016-07-17 23:01:32', '2016-07-31 14:04:45'),

// -- --------------------------------------------------------

// --
// -- Structure de la table `lrvl_booking_messanger`
// --

// CREATE TABLE `lrvl_booking_messanger` (
//   `messanger_id` bigint(250) NOT NULL,
//   `sander_user_id` bigint(20) NOT NULL,
//   `recipient_user_id` bigint(20) NOT NULL,
//   `messanger_booking_id` bigint(20) NOT NULL,
//   `messanger_content` text NOT NULL,
//   `is_opened` tinyint(2) NOT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// --
// -- Déchargement des données de la table `lrvl_booking_messanger`
// --

// INSERT INTO `lrvl_booking_messanger` (`messanger_id`, `sander_user_id`, `recipient_user_id`, `messanger_booking_id`, `messanger_content`, `is_opened`, `created_at`, `updated_at`) VALUES
// (11, 61, 8, 138, 'salam', 0, '2016-08-05 19:44:09', '2016-08-05 19:44:09'),

// -- --------------------------------------------------------

// --
// -- Structure de la table `lrvl_comments`
// --

// CREATE TABLE `lrvl_comments` (
//   `comment_id` bigint(250) NOT NULL,
//   `post_id` bigint(250) NOT NULL,
//   `author_name` varchar(150) NOT NULL,
//   `author_email` varchar(250) NOT NULL,
//   `comment` text NOT NULL,
//   `comment_status` int(2) NOT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// --
// -- Déchargement des données de la table `lrvl_comments`
// --

// INSERT INTO `lrvl_comments` (`comment_id`, `post_id`, `author_name`, `author_email`, `comment`, `comment_status`, `created_at`, `updated_at`) VALUES
// (13, 4, 'jawad', 'aloha@aloha.com', 'commentaiiire', 0, '2016-07-02 19:10:42', '2016-07-02 19:10:42'),

// -- --------------------------------------------------------

// --
// -- Structure de la table `lrvl_contact`
// --

// CREATE TABLE `lrvl_contact` (
//   `contact_id` bigint(250) NOT NULL,
//   `contact_fullname` varchar(250) NOT NULL,
//   `contact_email` varchar(200) NOT NULL,
//   `contact_phone` varchar(15) NOT NULL,
//   `contact_subject` varchar(200) NOT NULL,
//   `contact_message` text NOT NULL,
//   `contact_message_status` int(2) NOT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// --
// -- Déchargement des données de la table `lrvl_contact`
// --

// INSERT INTO `lrvl_contact` (`contact_id`, `contact_fullname`, `contact_email`, `contact_phone`, `contact_subject`, `contact_message`, `contact_message_status`, `created_at`, `updated_at`) VALUES
// (1, 'liste de teste 15', 'admins@admins.com', '0021265854132', 'final', 'fxc', 1, '2016-07-21 22:49:12', '2016-09-23 11:26:47'),

// -- --------------------------------------------------------

// --
// -- Structure de la table `lrvl_evaluations`
// --

// CREATE TABLE `lrvl_evaluations` (
//   `evaluation_id` bigint(200) NOT NULL,
//   `booking_id` bigint(200) NOT NULL,
//   `ad_id` bigint(200) NOT NULL,
//   `owner_id` bigint(20) NOT NULL,
//   `client_id` bigint(20) NOT NULL,
//   `user_id` bigint(20) NOT NULL,
//   `rate` tinyint(5) NOT NULL,
//   `comment` text NOT NULL,
//   `is_owner` tinyint(2) NOT NULL,
//   `is_opened` tinyint(2) NOT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// --
// -- Déchargement des données de la table `lrvl_evaluations`
// --

// INSERT INTO `lrvl_evaluations` (`evaluation_id`, `booking_id`, `ad_id`, `owner_id`, `client_id`, `user_id`, `rate`, `comment`, `is_owner`, `is_opened`, `created_at`, `updated_at`) VALUES
// (31, 144, 58, 8, 0, 0, 4, 'Locataire gentille', 1, 0, '2016-09-01 18:09:18', '2016-09-01 18:09:18'),
// (
// -- --------------------------------------------------------

// --
// -- Structure de la table `lrvl_messages`
// --

// CREATE TABLE `lrvl_messages` (
//   `message_id` bigint(200) NOT NULL,
//   `user_id` bigint(20) NOT NULL,
//   `sender_full_name` varchar(100) NOT NULL,
//   `sender_email` varchar(200) NOT NULL,
//   `sender_subject` varchar(250) NOT NULL,
//   `sender_message` text NOT NULL,
//   `message_status` int(1) NOT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// --
// -- Déchargement des données de la table `lrvl_messages`
// --

// INSERT INTO `lrvl_messages` (`message_id`, `user_id`, `sender_full_name`, `sender_email`, `sender_subject`, `sender_message`, `message_status`, `created_at`, `updated_at`) VALUES
// (1, 8, '', '', '', '', 1, '2016-05-07 15:15:44', '2016-05-08 00:51:16'),

// -- --------------------------------------------------------

// --
// -- Structure de la table `lrvl_posts`
// --

// CREATE TABLE `lrvl_posts` (
//   `id` bigint(250) NOT NULL,
//   `post_title` varchar(200) NOT NULL,
//   `post_slug` varchar(250) NOT NULL,
//   `post_content` text NOT NULL,
//   `post_filename` text NOT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// --
// -- Déchargement des données de la table `lrvl_posts`
// --

// INSERT INTO `lrvl_posts` (`id`, `post_title`, `post_slug`, `post_content`, `post_filename`, `created_at`, `updated_at`) VALUES
// (14, 'et si on partageait au lieu d\'acheter ?', 'et-si-on-partageait-au-lieu-d-acheter', '<p align=\"justify\"><span style=\"background-color: inherit;\"><font color=\"#000000\"><span style=\"font-size: 18px;\"><b>toutalouer.ma</b> est la place de marché de la location sur Internet.&nbsp; Vous pouvez y louer ou mettre en location tout&nbsp;les biens dont vous disposez.</span></font></span></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><br><span style=\"font-size: 18px;\">Le fonctionnement de toutalouer.ma en bref&nbsp;:</span></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><br></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><span style=\"font-size: 18px;\">Propriétaire :</span></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><br></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><span style=\"font-size: 18px;\">1 - je dépose une annonce de l\'objet que je veux louer, je mets une description de l\'objet, j\' ajoute une photo ou plus, je&nbsp;mets les tarifs. et la quantité disponible.</span></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><br></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><span style=\"font-size: 18px;\">2. Vous recevez une demande de réservation par mail, Vous pouvez accepter ou refuser la demande de&nbsp;réservation.</span></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><br></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><span style=\"font-size: 18px;\">3. Fixez le lieu de RDV pour donner l’objet loué, imprimez le contrat de location en 2 exemplaires (un pour vous, un pour le locataire). demandez le montant de la garantie en espéces ou par chéque certifié.</span></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><br></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><span style=\"font-size: 18px;\">4. A la fin de la location, le locataire vous ramène l’objet.</span></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><br></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><span style=\"font-size: 18px;\">locataire :</span></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><br></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><span style=\"font-size: 18px;\">1 - je cherche l\'objet à louer</span></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><br></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><span style=\"font-size: 18px;\">2 - je réserve l\'objet pour une période donnée, je paie un acompte de 15 % du montant total</span></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><br></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><span style=\"font-size: 18px;\">3 - je fixe le lieu de RDV, et on signe le contrat de location téléchargé sur le site. je paie le solde au propriétaire, retire mon objet auprès du propriétaire</span></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><br></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><span style=\"font-size: 18px;\">4 - à la fin j\'évalue le propriétaire et son bien à louer.</span></span></font></p><p align=\"justify\"><font color=\"#000000\"><span style=\"background-color: inherit;\"><br></span></font></p>', '[\"consommation-collaborative.jpg\"]', '2016-12-19 20:07:36', '2022-09-21 14:54:35'),
// (16, 'Pourquoi toutalouer.ma ?', 'pourquoi-toutalouer-ma', 'Tout simplement pour 3 raisons principales, premièrement parce que c\'est rentable, car en louant vos objets, ça vous permettra d\'avoir un revenu complémentaire pour arrondir vos fins de mois, et aussi de faire des économies pour les locataires qui auront des tarifs intéressants et des objets disponibles.<p><br></p><p>Deuxièmement c\'est la réutilisation des objets qu\'on cherche à instaurer dans notre culture de consommation pour protéger notre environnement et aussi la planète, en faisant tourner nos objets entre nous, mieux que si chacun de nous a le même objet qui ne sera utilisé par certains que deux ou trois fois par an. Donc Toutalouer.ma cherche à privilégier l\'usage plus que la propriété sous une dimension écologique.</p><p><br></p><p>Troisièmement, Toutalouer.ma cherche à recréer le lien social entre les gens à travers l\'échange et le partage de leurs biens avec une notion de citoyenneté et de sociabilité.<br></p><p><br></p>', '[\"conso-collabo-2.png\"]', '2016-12-19 20:25:02', '2016-12-19 20:25:02'),
// (17, 'اكسب المال عن طريق تأجير الممتلكات الخاصة بك', 'ksb-lm-l-aan-tryk-tagyr-lmmtlk-t-lkh-s-bk', '<br><ul><li>أول موقع إلكتروني لتأجير كل الأشياء بين الأشخاص في المغرب، السيارات، الأثاث، ومعدات الفيديو، وكل ما تحتاجون.</li><li><br>يمكنكم تأجير أشياءكم الخاصة لأشخاص آخرين ليستفيدوا منها وكذلك لربح مدخول من تأجيرها</li><li><br>يكفي ان تضعوا إعلانا عن الشيء المراد تأجيره مع صوره وكذلك تكاليف التأجير في اليوم او في الأسبوع او في الشهر. وبعد ذلك تبدؤون في تلقي طلبات الحجز من الأشخاص اللذين يودون استعمال هذا الشيء سواء كان سيارة او معدات الڤيديو او غير ذلك</li><li><br>تبقى المعلومات الشخصية للمؤجر (الذي وضع الإعلان ) غير مكشوفة إلى حين ان يدفع المستأجر 15 % من مبلغ الإجمالي لكراء الشيء ثم يحصل على المعلومات الشخصية للمؤجر و يتصل به لتحديد مكان و زمان استلام الشيء المراد كرائه وكذلك لدفع المبلغ المتبقي، بإمكان المستأجر ان يلغي الحجز في اجل ثلاثة ايام التي تلي الحجز حتى يحق له استرجاع المبلغ المقدم (15 % من المبلغ الإجمالي)<br></li><li><br></li></ul>', '[\"\\u062a\\u0634\\u0627\\u0631\\u0643\\u064a.jpg\"]', '2016-12-19 20:31:48', '2016-12-19 20:31:48'),

// -- --------------------------------------------------------

// --
// -- Structure de la table `lrvl_subscriptions`
// --

// CREATE TABLE `lrvl_subscriptions` (
//   `subscription_id` bigint(250) NOT NULL,
//   `user_id` bigint(20) NOT NULL,
//   `pack_id` bigint(20) NOT NULL,
//   `subscriptions_duration` int(20) NOT NULL,
//   `subscriptions_payment_type` varchar(50) NOT NULL,
//   `subscriptions_amount` decimal(10,2) NOT NULL,
//   `amount_to_pay` decimal(10,2) NOT NULL COMMENT 'The amount which the user have to pay.',
//   `subscriptions_status` int(2) NOT NULL,
//   `subscriptions_callback_data` text NOT NULL,
//   `merchant_token` varchar(250) NOT NULL,
//   `payed_at` datetime NOT NULL,
//   `expire_at` datetime NOT NULL,
//   `created_at` datetime NOT NULL,
//   `updated_at` datetime NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// --
// -- Déchargement des données de la table `lrvl_subscriptions`
// --

// INSERT INTO `lrvl_subscriptions` (`subscription_id`, `user_id`, `pack_id`, `subscriptions_duration`, `subscriptions_payment_type`, `subscriptions_amount`, `amount_to_pay`, `subscriptions_status`, `subscriptions_callback_data`, `merchant_token`, `payed_at`, `expire_at`, `created_at`, `updated_at`) VALUES

// -- --------------------------------------------------------

// --
// -- Structure de la table `migrations`
// --

// CREATE TABLE `migrations` (
//   `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//   `batch` int(11) NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

// --
// -- Déchargement des données de la table `migrations`
// --

// INSERT INTO `migrations` (`migration`, `batch`) VALUES
// ('2014_10_12_000000_create_users_table', 1),
// ('2014_10_12_100000_create_password_resets_table', 1),
// ('2016_03_09_141351_create_admins_table', 1);

// -- --------------------------------------------------------

// --
// -- Structure de la table `password_resets`
// --

// CREATE TABLE `password_resets` (
//   `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//   `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//   `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

// --
// -- Déchargement des données de la table `password_resets`
// --

// INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
// ('yannick2005n@gmail.com', 'dad9fbacb8bd01f15e21ca07debb1b94255bfc5e375fbec625192d9ed9fff700', '2016-09-01 19:00:32'),

// -- --------------------------------------------------------

// --
// -- Structure de la table `users`
// --

// CREATE TABLE `users` (
//   `id` bigint(20) UNSIGNED NOT NULL,
//   `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//   `pseudo` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
//   `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//   `phone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
//   `user_city` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
//   `zipcode` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
//   `address` text COLLATE utf8_unicode_ci NOT NULL,
//   `image_name` text COLLATE utf8_unicode_ci NOT NULL,
//   `company_name` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
//   `website` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
//   `subscription_type_id` int(40) NOT NULL,
//   `is_pro` tinyint(2) NOT NULL,
//   `status` tinyint(2) NOT NULL,
//   `is_quotation` int(2) NOT NULL,
//   `password` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
//   `verified` tinyint(1) NOT NULL COMMENT 'Also used to enable/disable user by the admin.',
//   `verification_token` text COLLATE utf8_unicode_ci DEFAULT NULL,
//   `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
//   `created_at` timestamp NULL DEFAULT NULL,
//   `updated_at` timestamp NULL DEFAULT NULL,
//   `email_verified_at` timestamp NULL DEFAULT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

// --
// -- Déchargement des données de la table `users`
// --

// INSERT INTO `users` (`id`, `name`, `pseudo`, `email`, `phone`, `user_city`, `zipcode`, `address`, `image_name`, `company_name`, `website`, `subscription_type_id`, `is_pro`, `status`, `is_quotation`, `password`, `verified`, `verification_token`, `remember_token`, `created_at`, `updated_at`, `email_verified_at`) VALUES
// (4, 'Jawad', 'Jawader', 'hg.jawad@test.com', '', '', '', '', '', '', '', 0, 0, 0, 0, '$2y$10$DARaMEdry75y3QfsQDqRjuiB7D8j5F49/d862ZF2uYh2ukDTkzCqi', 0, NULL, NULL, '2016-03-29 13:56:12', '2016-03-29 13:56:12', NULL),

// --
// -- Index pour les tables déchargées
// --

// --
// -- Index pour la table `admins`
// --
// ALTER TABLE `admins`
//   ADD PRIMARY KEY (`id`),
//   ADD UNIQUE KEY `admins_email_unique` (`email`);

// --
// -- Index pour la table `cms_items`
// --
// ALTER TABLE `cms_items`
//   ADD PRIMARY KEY (`item_id`);

// --
// -- Index pour la table `cms_items_meta`
// --
// ALTER TABLE `cms_items_meta`
//   ADD PRIMARY KEY (`meta_id`);

// --
// -- Index pour la table `cms_modules`
// --
// ALTER TABLE `cms_modules`
//   ADD PRIMARY KEY (`module_id`),
//   ADD UNIQUE KEY `module_name` (`module_name`);

// --
// -- Index pour la table `cms_pages`
// --
// ALTER TABLE `cms_pages`
//   ADD PRIMARY KEY (`id`);

// --
// -- Index pour la table `lrvl_ads_comments`
// --
// ALTER TABLE `lrvl_ads_comments`
//   ADD PRIMARY KEY (`ads_comments_id`);

// --
// -- Index pour la table `lrvl_ads_rating`
// --
// ALTER TABLE `lrvl_ads_rating`
//   ADD PRIMARY KEY (`rating_id`);

// --
// -- Index pour la table `lrvl_ad_pricings`
// --
// ALTER TABLE `lrvl_ad_pricings`
//   ADD PRIMARY KEY (`id`),
//   ADD KEY `user_id` (`user_id`),
//   ADD KEY `announce_id` (`announce_id`);

// --
// -- Index pour la table `lrvl_announces`
// --
// ALTER TABLE `lrvl_announces`
//   ADD PRIMARY KEY (`id`),
//   ADD KEY `user_id` (`user_id`);

// --
// -- Index pour la table `lrvl_announces_features`
// --
// ALTER TABLE `lrvl_announces_features`
//   ADD PRIMARY KEY (`features_id`),
//   ADD KEY `ad_id` (`ad_id`);

// --
// -- Index pour la table `lrvl_availability_pricing`
// --
// ALTER TABLE `lrvl_availability_pricing`
//   ADD PRIMARY KEY (`availability_id`),
//   ADD KEY `ad_id` (`ad_id`);

// --
// -- Index pour la table `lrvl_booking`
// --
// ALTER TABLE `lrvl_booking`
//   ADD PRIMARY KEY (`booking_id`);

// --
// -- Index pour la table `lrvl_booking_messanger`
// --
// ALTER TABLE `lrvl_booking_messanger`
//   ADD PRIMARY KEY (`messanger_id`);

// --
// -- Index pour la table `lrvl_comments`
// --
// ALTER TABLE `lrvl_comments`
//   ADD PRIMARY KEY (`comment_id`);

// --
// -- Index pour la table `lrvl_contact`
// --
// ALTER TABLE `lrvl_contact`
//   ADD PRIMARY KEY (`contact_id`);

// --
// -- Index pour la table `lrvl_evaluations`
// --
// ALTER TABLE `lrvl_evaluations`
//   ADD PRIMARY KEY (`evaluation_id`);

// --
// -- Index pour la table `lrvl_messages`
// --
// ALTER TABLE `lrvl_messages`
//   ADD PRIMARY KEY (`message_id`);

// --
// -- Index pour la table `lrvl_posts`
// --
// ALTER TABLE `lrvl_posts`
//   ADD PRIMARY KEY (`id`);

// --
// -- Index pour la table `lrvl_subscriptions`
// --
// ALTER TABLE `lrvl_subscriptions`
//   ADD PRIMARY KEY (`subscription_id`);

// --
// -- Index pour la table `password_resets`
// --
// ALTER TABLE `password_resets`
//   ADD KEY `password_resets_email_index` (`email`),
//   ADD KEY `password_resets_token_index` (`token`);

// --
// -- Index pour la table `users`
// --
// ALTER TABLE `users`
//   ADD PRIMARY KEY (`id`),
//   ADD UNIQUE KEY `users_email_unique` (`email`),
//   ADD UNIQUE KEY `pseudo` (`pseudo`);

// --
// -- AUTO_INCREMENT pour les tables déchargées
// --

// --
// -- AUTO_INCREMENT pour la table `admins`
// --
// ALTER TABLE `admins`
//   MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

// --
// -- AUTO_INCREMENT pour la table `cms_items`
// --
// ALTER TABLE `cms_items`
//   MODIFY `item_id` bigint(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

// --
// -- AUTO_INCREMENT pour la table `cms_items_meta`
// --
// ALTER TABLE `cms_items_meta`
//   MODIFY `meta_id` bigint(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=294;

// --
// -- AUTO_INCREMENT pour la table `cms_modules`
// --
// ALTER TABLE `cms_modules`
//   MODIFY `module_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

// --
// -- AUTO_INCREMENT pour la table `cms_pages`
// --
// ALTER TABLE `cms_pages`
//   MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

// --
// -- AUTO_INCREMENT pour la table `lrvl_ads_comments`
// --
// ALTER TABLE `lrvl_ads_comments`
//   MODIFY `ads_comments_id` bigint(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

// --
// -- AUTO_INCREMENT pour la table `lrvl_ads_rating`
// --
// ALTER TABLE `lrvl_ads_rating`
//   MODIFY `rating_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

// --
// -- AUTO_INCREMENT pour la table `lrvl_ad_pricings`
// --
// ALTER TABLE `lrvl_ad_pricings`
//   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

// --
// -- AUTO_INCREMENT pour la table `lrvl_announces`
// --
// ALTER TABLE `lrvl_announces`
//   MODIFY `id` bigint(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=294;

// --
// -- AUTO_INCREMENT pour la table `lrvl_announces_features`
// --
// ALTER TABLE `lrvl_announces_features`
//   MODIFY `features_id` bigint(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=292;

// --
// -- AUTO_INCREMENT pour la table `lrvl_availability_pricing`
// --
// ALTER TABLE `lrvl_availability_pricing`
//   MODIFY `availability_id` bigint(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1987;

// --
// -- AUTO_INCREMENT pour la table `lrvl_booking`
// --
// ALTER TABLE `lrvl_booking`
//   MODIFY `booking_id` bigint(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1003;

// --
// -- AUTO_INCREMENT pour la table `lrvl_booking_messanger`
// --
// ALTER TABLE `lrvl_booking_messanger`
//   MODIFY `messanger_id` bigint(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=274;

// --
// -- AUTO_INCREMENT pour la table `lrvl_comments`
// --
// ALTER TABLE `lrvl_comments`
//   MODIFY `comment_id` bigint(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

// --
// -- AUTO_INCREMENT pour la table `lrvl_contact`
// --
// ALTER TABLE `lrvl_contact`
//   MODIFY `contact_id` bigint(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

// --
// -- AUTO_INCREMENT pour la table `lrvl_evaluations`
// --
// ALTER TABLE `lrvl_evaluations`
//   MODIFY `evaluation_id` bigint(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

// --
// -- AUTO_INCREMENT pour la table `lrvl_messages`
// --
// ALTER TABLE `lrvl_messages`
//   MODIFY `message_id` bigint(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

// --
// -- AUTO_INCREMENT pour la table `lrvl_posts`
// --
// ALTER TABLE `lrvl_posts`
//   MODIFY `id` bigint(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

// --
// -- AUTO_INCREMENT pour la table `lrvl_subscriptions`
// --
// ALTER TABLE `lrvl_subscriptions`
//   MODIFY `subscription_id` bigint(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=206;

// --
// -- AUTO_INCREMENT pour la table `users`
// --
// ALTER TABLE `users`
//   MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=735;

// --
// -- Contraintes pour les tables déchargées
// --

// --
// -- Contraintes pour la table `lrvl_ad_pricings`
// --
// ALTER TABLE `lrvl_ad_pricings`
//   ADD CONSTRAINT `lrvl_ad_pricings_ibfk_1` FOREIGN KEY (`announce_id`) REFERENCES `lrvl_announces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
//   ADD CONSTRAINT `lrvl_ad_pricings_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
// COMMIT;

















// ALTER TABLE `admins`
//   ADD PRIMARY KEY (`id`),
//   ADD UNIQUE KEY `admins_email_unique` (`email`);
// ALTER TABLE `cms_items`
//   ADD PRIMARY KEY (`item_id`);
// ALTER TABLE `cms_items_meta`
//   ADD PRIMARY KEY (`meta_id`);
// ALTER TABLE `cms_modules`
//   ADD PRIMARY KEY (`module_id`),
//   ADD UNIQUE KEY `module_name` (`module_name`);
// ALTER TABLE `cms_pages`
//   ADD PRIMARY KEY (`id`);
// ALTER TABLE `lrvl_ads_comments`
//   ADD PRIMARY KEY (`ads_comments_id`);
// ALTER TABLE `lrvl_ads_rating`
//   ADD PRIMARY KEY (`rating_id`);
// ALTER TABLE `lrvl_ad_pricings`
//   ADD PRIMARY KEY (`id`),
//   ADD KEY `user_id` (`user_id`),
//   ADD KEY `announce_id` (`announce_id`);
// ALTER TABLE `lrvl_announces`
//   ADD PRIMARY KEY (`id`),
//   ADD KEY `user_id` (`user_id`);
// ALTER TABLE `lrvl_announces_features`
//   ADD PRIMARY KEY (`features_id`),
//   ADD KEY `ad_id` (`ad_id`);
// ALTER TABLE `lrvl_availability_pricing`
//   ADD PRIMARY KEY (`availability_id`),
//   ADD KEY `ad_id` (`ad_id`);
// ALTER TABLE `lrvl_booking`
//   ADD PRIMARY KEY (`booking_id`);
// ALTER TABLE `lrvl_booking_messanger`
//   ADD PRIMARY KEY (`messanger_id`);
// ALTER TABLE `lrvl_comments`
//   ADD PRIMARY KEY (`comment_id`);
// ALTER TABLE `lrvl_contact`
//   ADD PRIMARY KEY (`contact_id`);
// ALTER TABLE `lrvl_evaluations`
//   ADD PRIMARY KEY (`evaluation_id`);
// ALTER TABLE `lrvl_messages`
//   ADD PRIMARY KEY (`message_id`);
// ALTER TABLE `lrvl_posts`
//   ADD PRIMARY KEY (`id`);
// ALTER TABLE `lrvl_subscriptions`
//   ADD PRIMARY KEY (`subscription_id`);
// ALTER TABLE `password_resets`
//   ADD KEY `password_resets_email_index` (`email`),
//   ADD KEY `password_resets_token_index` (`token`);
// ALTER TABLE `users`
//   ADD PRIMARY KEY (`id`),
//   ADD UNIQUE KEY `users_email_unique` (`email`),
//   ADD UNIQUE KEY `pseudo` (`pseudo`);
// ALTER TABLE `admins`
//   MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

// ALTER TABLE `cms_items`
//   MODIFY `item_id` bigint(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;
// ALTER TABLE `cms_items_meta`
//   MODIFY `meta_id` bigint(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=294;
// ALTER TABLE `cms_modules`
//   MODIFY `module_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

// ALTER TABLE `cms_pages`
//   MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
// ALTER TABLE `lrvl_ads_comments`
//   MODIFY `ads_comments_id` bigint(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
// ALTER TABLE `lrvl_ads_rating`
//   MODIFY `rating_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
// ALTER TABLE `lrvl_ad_pricings`
//   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
// ALTER TABLE `lrvl_announces`
//   MODIFY `id` bigint(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=294;
// ALTER TABLE `lrvl_announces_features`
//   MODIFY `features_id` bigint(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=292;
// ALTER TABLE `lrvl_availability_pricing`
//   MODIFY `availability_id` bigint(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1987;
// ALTER TABLE `lrvl_booking`
//   MODIFY `booking_id` bigint(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1003;
// ALTER TABLE `lrvl_booking_messanger`
//   MODIFY `messanger_id` bigint(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=274;
// ALTER TABLE `lrvl_comments`
//   MODIFY `comment_id` bigint(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
// ALTER TABLE `lrvl_contact`
//   MODIFY `contact_id` bigint(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;
// ALTER TABLE `lrvl_evaluations`
//   MODIFY `evaluation_id` bigint(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
// ALTER TABLE `lrvl_messages`
//   MODIFY `message_id` bigint(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;
// ALTER TABLE `lrvl_posts`
//   MODIFY `id` bigint(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
// ALTER TABLE `lrvl_subscriptions`
//   MODIFY `subscription_id` bigint(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=206;
// ALTER TABLE `users`
//   MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=735;
// ALTER TABLE `lrvl_ad_pricings`
//   ADD CONSTRAINT `lrvl_ad_pricings_ibfk_1` FOREIGN KEY (`announce_id`) REFERENCES `lrvl_announces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
//   ADD CONSTRAINT `lrvl_ad_pricings_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
// COMMIT;