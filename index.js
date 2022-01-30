
function get_naruto_characters() {
    const characters = ['Naruto', 'Sasuke', 'Sai', 'Kakashi', 'Itachi Uchiha', 'Kakashi Hatake',
        'Minato Namikaze', 'Jiraiya', 'Orochimaru', 'Pain', 'Sakura', 'Tsunade', 'Hidan', 'Diedara', 'Kakazu', 'Obito',
        'Sasori', 'Killer bee', 'Samui', 'Gaara', 'Neji', 'Tenten', 'Rock Lee', 'Might Guy', 'Konan',
        'Choji', 'Ino', 'Shikamaru', 'Shikadai', 'Asuma', 'Yamato', 'Hashirama', 'Madara Uchiha', 'Kabuto', 'Zabuza'
        , 'Kushina Uzumaki', 'Iruka', 'Shikaku', 'White Zetsu', 'Kisame Hoshikagi'];

    const num = Math.floor(Math.random() * characters.length);
    return characters[num];
}

module.exports = get_naruto_characters