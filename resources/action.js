function action(character, target, damage, pDamage, bDamage, healing) {
    target.damage = target.damage+damage + pDamage + bDamage
}