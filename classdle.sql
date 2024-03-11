-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Már 06. 11:14
-- Kiszolgáló verziója: 10.4.6-MariaDB
-- PHP verzió: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `classdle`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `emoji`
--

CREATE TABLE `emoji` (
  `Emoji1` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `Emoji2` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `Emoji3` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `Név` varchar(30) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `emoji`
--

INSERT INTO `emoji` (`Emoji1`, `Emoji2`, `Emoji3`, `Név`) VALUES
('&#129392', '&#127930', '&#9917', 'Dudás Levente'),
('&#128511', '&#127836', '&#128052', 'Auer Zoltán'),
('&#128743', '&#128684', '&#128122', 'Tarr Gábor'),
('&#128141', '&#128038', '&#129336', 'Mojzes Ervin'),
('&#129299', '&#127934', '&#129314', 'Bartek Áron'),
('&#128121', '&#127955', '&#129324', 'Varga János'),
('&#129342', '&#129364', '&#128679', 'Somodi Konrád'),
('&#128406', '&#127955', '&#128298', 'Utasi Balázs'),
('&#128066', '&#128214', '&#127851', 'Csóka András'),
('&#128187', '&#129302', '&#128016', 'Kecskés Zsolt'),
('&#128038', '&#128569', '&#129299', 'Mészáros Ricsi'),
('&#127884', '&#127918', '&#128296', 'Ótott-Kovács Máté'),
('&#128008', '&#128131', '&#128105', 'Beréti Zsófia'),
('&#128169', '&#129313', '&#127920', 'Kulimák Máté'),
('&#128511', '&#128298', '&#128116', 'Kővágó Levente'),
('&#127907', '&#128507', '&#127928', 'Tátrai Dominik Oszkár'),
('&#128572', '&#128187', '&#129332', 'Császár András'),
('&#129346', '&#129430', '&#129301', 'Csanádi Kevin');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kep`
--

CREATE TABLE `kep` (
  `Nev` varchar(30) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `kepneve` varchar(30) COLLATE utf8_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `kep`
--

INSERT INTO `kep` (`Nev`, `kepneve`) VALUES
('Auer Zoltán', 'zoli'),
('Bartek Áron', 'aron'),
('Beréti Zsófia', 'zsofi'),
('Csanádi Kevin', 'kevin'),
('Császár András', 'kernel'),
('Csóka András', 'csoki'),
('Dudás levente', 'dudas'),
('Kecskés Zsolt István', 'zsolti'),
('Kővágó Levente', 'bezdan'),
('Kulimák Máté', 'kulimak'),
('Mészáros Richárd', 'ricsi'),
('Mojzes Ervin', 'ervin'),
('Ótott-Kovács Máté', 'mate'),
('Somodi Konrád', 'konrad'),
('Tarr Gábor', 'tarr'),
('Tátrai Dominik Oszkár', 'dominik'),
('Utasi Balázs', 'balazs'),
('Varga János', 'jani');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `klasszikus`
--

CREATE TABLE `klasszikus` (
  `Nem` varchar(30) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `Magasság` varchar(30) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `Súly` varchar(20) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `Hajszín` varchar(20) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `Lakhely` varchar(30) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `SzületésiÉv` varchar(30) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `Név` varchar(30) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `klasszikus`
--

INSERT INTO `klasszikus` (`Nem`, `Magasság`, `Súly`, `Hajszín`, `Lakhely`, `SzületésiÉv`, `Név`) VALUES
('Férfi', '173', '71', 'Barna', 'Baja', '2005', 'Bartek Áron'),
('Férfi', '183', '105', 'Barna', 'Hercegszántó', '2006', 'Somodi Konrád'),
('Férfi', '191', '131', 'Fekete', 'Dusnok', '2006', 'Varga János'),
('Férfi', '169', '61', 'Barna', 'Bácsborsód', '2006', 'Utasi Balázs'),
('Férfi', '181', '78', 'SzőkésBarna', 'Madaras', '2005', 'Mojzes Ervin'),
('Férfi', '178', '83', 'Szőke', 'Bezdán', '2005', 'Kővágó Levente'),
('Férfi', '168', '60', 'Szőke', 'Baja', '2006', 'Császár András'),
('Férfi', '180', '81', 'Barna', 'Vaskút', '2005', 'Kulimák Máté'),
('Férfi', '179', '68', 'SötétBarna', 'Csávoly', '2006', 'Csanádi Kevin'),
('Férfi', '181', '60', 'SzőkésBarna', 'Bátmonostor', '2005', 'Csóka András'),
('Férfi', '181', '62', 'Barna', 'Dusnok', '2005', 'Dudás Levente'),
('Férfi', '179', '110', 'SötétBarna', 'Csátalja', '2005', 'Auer Zoltán'),
('Férfi', '185', '75', 'Fekete', 'Madaras', '2005', 'Mészáros Richárd'),
('Férfi', '176', '74', 'Barna', 'Csátalja', '2005', 'Ótott-Kovács Máté'),
('Nő', '164', '64', 'SötétBarna', 'Csátalja', '2005', 'Beréti Zsófia'),
('Férfi', '188', '114', 'Barna', 'Baja', '2005', 'Tátrai Dominik Oszkár'),
('Semleges', '174', '75', 'Barna', 'Baja', '2005', 'Kecskés Zsolt István'),
('Férfi', '179', '74', 'Barna', 'Baja', '2005', 'Tarr Gábor');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
