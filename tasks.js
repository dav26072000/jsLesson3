//  What will be the result and why?
// "" + 1 + 0     => "10" | string + number = string
// "" - 1 + 0     => NaN | string - number is not a number => NaN
// true + false   => true
// 6 / "3"        => 2 | string with all other operators try to convert string to number beside +
// "2" * "3"      => 6
// 4 + 5 + "px"   => "9px"
// "$" + 4 + 5    => "$45"
// "4" - 2        => "2"
// "4px" - 2      => NaN
// 7 / 0          => Infinity
// " -9 " + 5     => "-95"
// " -9 " - 5     => -14
// null + 1       => 1
// undefined + 1  => NaN
