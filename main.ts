namespace SpriteKind {
    export const Clicker = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    bButton.setImage(assets.image`B static down`)
    info.changeScoreBy(-20)
    power2 += 1
    for (let index = 0; index < 10; index++) {
        projectile = sprites.createProjectileFromSide(assets.image`Big Star`, 200, 200)
        projectile.lifespan = 1000
        projectile.x = randint(0, 160)
        projectile.follow(bButton)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    aButton.setImage(assets.image`A static Down`)
    info.changeScoreBy(power2)
    for (let index = 0; index < power2; index++) {
        onClick = sprites.createProjectileFromSprite(assets.image`Star`, aButton, randint(-25, 100), -100)
    }
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    aButton.setImage(assets.image`A static`)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    bButton.setImage(assets.image`B static`)
})
let onClick: Sprite = null
let projectile: Sprite = null
let power2 = 0
let bButton: Sprite = null
let aButton: Sprite = null
aButton = sprites.create(assets.image`A static`, SpriteKind.Clicker)
bButton = sprites.create(assets.image`B static`, SpriteKind.Clicker)
aButton.setPosition(24, 102)
bButton.setPosition(136, 102)
scene.setBackgroundImage(assets.image`TheStage`)
info.startCountdown(10)
game.splash("Press (A) to play!")
let mySprite = sprites.create(assets.image`Kitten4`, SpriteKind.Player)
power2 = 1
