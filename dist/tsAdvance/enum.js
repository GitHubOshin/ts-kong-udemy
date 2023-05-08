"use strict";
var LoveLevel;
(function (LoveLevel) {
    LoveLevel[LoveLevel["Never"] = 0] = "Never";
    LoveLevel[LoveLevel["DontTouchMyFood"] = 1] = "DontTouchMyFood";
    LoveLevel[LoveLevel["IcanShareMyFood"] = 2] = "IcanShareMyFood";
    LoveLevel[LoveLevel["YourFoodIsMine"] = 3] = "YourFoodIsMine";
})(LoveLevel || (LoveLevel = {}));
const myLoveForRare = LoveLevel.YourFoodIsMine;
var Hungry;
(function (Hungry) {
    Hungry[Hungry["No"] = 0] = "No";
    Hungry[Hungry["CanEatButNotHungry"] = 1] = "CanEatButNotHungry";
    Hungry[Hungry["ImHungry"] = 50] = "ImHungry";
    Hungry[Hungry["CantWaitAnymore"] = 100] = "CantWaitAnymore";
})(Hungry || (Hungry = {}));
