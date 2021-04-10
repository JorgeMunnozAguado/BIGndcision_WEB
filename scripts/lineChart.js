/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var newVirus = "icons/lineChart/newVirus.png";
var covid = "icons/lineChart/covid.png";
var china = "icons/lineChart/china.png";
var casa = "icons/lineChart/casa.svg";
var paseo = "icons/lineChart/paseo.png";
var restaurante = "icons/lineChart/restaurante.svg";
var car = "icons/lineChart/distancia.png";
var coffee = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMS45OTkgNTExLjk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjk5OSA1MTEuOTk5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE3OS4zNjEsOTkuOTAzYy0xMS40MS0xMS40MS0xNi40NTQtMTcuMDA1LTE2LjQ1Mi0zMC4wODljLTAuMDAyLTEzLjA3OSw1LjA0NC0xOC42NzQsMTYuNDU3LTMwLjA4OQ0KCQkJYzkuMDg5LTkuMDg3LDkuMDg5LTIzLjgyLDAuMDAyLTMyLjkwOWMtOS4wODctOS4wOS0yMy44MjUtOS4wODctMzIuOTE0LTAuMDAyYy0xMi42OTksMTIuNjk4LTMwLjA5NSwzMC4wOS0zMC4wOSw2Mi45OTkNCgkJCWMtMC4wMDUsMzIuOTE0LDE3LjM4OCw1MC4zMDUsMzAuMDg5LDYzLjAwMWMxMS40MTEsMTEuNDEzLDE2LjQ1NywxNy4wMTEsMTYuNDU3LDMwLjA5MmMwLDEyLjg1NCwxMC40MiwyMy4yNzMsMjMuMjczLDIzLjI3Mw0KCQkJczIzLjI3My0xMC40MTgsMjMuMjczLTIzLjI3M0MyMDkuNDU0LDEyOS45OTMsMTkyLjA2MiwxMTIuNjAxLDE3OS4zNjEsOTkuOTAzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjg3Ljk2Nyw5OS45MDNjLTExLjQxLTExLjQxLTE2LjQ1NC0xNy4wMDUtMTYuNDUyLTMwLjA4OWMtMC4wMDItMTMuMDc5LDUuMDQ0LTE4LjY3NCwxNi40NTctMzAuMDg5DQoJCQljOS4wODktOS4wODcsOS4wODktMjMuODIsMC4wMDItMzIuOTA5Yy05LjA4Ny05LjA5LTIzLjgyNS05LjA4Ny0zMi45MTQtMC4wMDJjLTEyLjY5OSwxMi42OTgtMzAuMDk1LDMwLjA5Mi0zMC4wOSw2Mi45OTkNCgkJCWMtMC4wMDUsMzIuOTE0LDE3LjM4OCw1MC4zMDUsMzAuMDg5LDYzLjAwMWMxMS40MTEsMTEuNDEzLDE2LjQ1NywxNy4wMTEsMTYuNDU3LDMwLjA5MmMwLDEyLjg1NCwxMC40MiwyMy4yNzMsMjMuMjczLDIzLjI3Mw0KCQkJczIzLjI3My0xMC40MTgsMjMuMjczLTIzLjI3M0MzMTguMDYxLDEyOS45OTMsMzAwLjY2OCwxMTIuNjAxLDI4Ny45NjcsOTkuOTAzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzgxLjQwMSw0MDMuMzkzaDIxLjk5M2MwLjAyMiwwLDAuMDM5LTAuMDAzLDAuMDYxLTAuMDAzYzQ3LjAyMy0wLjAzMSw4NS4yNzMtMzguMjk4LDg1LjI3My04NS4zMzENCgkJCWMwLTQ3LjA1My0zOC4yODEtODUuMzM0LTg1LjMzNC04NS4zMzRoLTMxLjAzSDYyLjA2Yy0xMi44NTMsMC0yMy4yNzMsMTAuNDIyLTIzLjI3MywyMy4yNzN2NzcuNTc2DQoJCQljMCw1Mi4xOTMsMjIuNTI4LDk5LjIyMSw1OC4zNywxMzEuODc5SDQ2LjU0NWMtMTIuODUzLDAtMjMuMjczLDEwLjQxOC0yMy4yNzMsMjMuMjczYzAsMTIuODUxLDEwLjQyLDIzLjI3MywyMy4yNzMsMjMuMjczDQoJCQloMTcwLjY2N2gxNzAuNjY3YzEyLjg1MywwLDIzLjI3My0xMC40MjIsMjMuMjczLTIzLjI3M2MwLTEyLjg1NC0xMC40Mi0yMy4yNzMtMjMuMjczLTIzLjI3M2gtNTAuNjEyDQoJCQlDMzU2LjEwNCw0NDguMjg5LDM3MS4yNTcsNDI3LjE1OCwzODEuNDAxLDQwMy4zOTN6IE0zOTUuNjM3LDMzMy41NzV2LTU0LjMwM2g3Ljc1OGMyMS4zODgsMCwzOC43ODgsMTcuNCwzOC43ODgsMzguNzg4DQoJCQlzLTE3LjQsMzguNzg4LTM4Ljc4OCwzOC43ODhjLTAuMDExLDAtMC4wMiwwLTAuMDMxLDBoLTkuMjQ1QzM5NS4xMTUsMzQ5LjIyOSwzOTUuNjM3LDM0MS40NjEsMzk1LjYzNywzMzMuNTc1eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K";
var dinner = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjY0LjE4MSw3Ni45MDljLTkzLjY0NiwwLTE2OS41NjEsNzUuOTE1LTE2OS41NjEsMTY5LjU2MXM3NS45MTUsMTY5LjU2MSwxNjkuNTYxLDE2OS41NjENCgkJCXMxNjkuNTYxLTc1LjkxNSwxNjkuNTYxLTE2OS41NjFTMzU3LjgyNyw3Ni45MDksMjY0LjE4MSw3Ni45MDl6IE0yNjQuMTgsMzc1LjEyOWMtNzAuOTQyLDAtMTI4LjY1OC01Ny43MTYtMTI4LjY1OC0xMjguNjU4DQoJCQlzNTcuNzE2LTEyOC42NTgsMTI4LjY1OC0xMjguNjU4czEyOC42NTgsNTcuNzE2LDEyOC42NTgsMTI4LjY1OFMzMzUuMTIzLDM3NS4xMjksMjY0LjE4LDM3NS4xMjl6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNjQuMTgsMTUyLjI5OWMtNTEuOTI2LDAtOTQuMTcxLDQyLjI0NS05NC4xNzEsOTQuMTcxYzAsNTEuOTI2LDQyLjI0NSw5NC4xNzEsOTQuMTcxLDk0LjE3MQ0KCQkJYzUxLjkyNiwwLDk0LjE3MS00Mi4yNDUsOTQuMTcxLTk0LjE3MVMzMTYuMTA3LDE1Mi4yOTksMjY0LjE4LDE1Mi4yOTl6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik01MDEuMzE1LDI2MC42ODdWNTQuNjRjMC0xLjk4OC0xLjI2OS0zLjc1NS0zLjE1NS00LjM5Yy0xLjg4NC0wLjYzNC0zLjk2MywwLjAwNy01LjE2NiwxLjU5MQ0KCQkJYy0yNS43MDgsMzMuOTAzLTM5LjYyMiw3NS4yODMtMzkuNjIyLDExNy44M3Y3NS4zNzhjMCw4LjY0NSw3LjAwOCwxNS42NTQsMTUuNjU0LDE1LjY1NGg2LjUyNg0KCQkJYy02LjQzMyw2Ni40NDMtMTAuNjg0LDE1OS4zNy0xMC42ODQsMTcwLjI1MWMwLDE3LjE0MiwxMC41NTEsMzEuMDM4LDIzLjU2NiwzMS4wMzhjMTMuMDE1LDAsMjMuNTY2LTEzLjg5NywyMy41NjYtMzEuMDM4DQoJCQlDNTEyLDQyMC4wNzIsNTA3Ljc0OSwzMjcuMTMsNTAxLjMxNSwyNjAuNjg3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNjguNDE3LDIxOS44NDNjMTMuMDQyLTcuOSwyMS43NTktMjIuMjI0LDIxLjc1OS0zOC41ODZsLTYuNDYtMTA1LjYyMWMtMC4yNDctNC4wMjYtMy41ODQtNy4xNjUtNy42MTgtNy4xNjUNCgkJCWMtNC4zNjMsMC03LjgzOSwzLjY1NS03LjYyMiw4LjAxbDQuMjAxLDg0LjcwOWMwLDQuNzYyLTMuODYxLDguNjIxLTguNjIxLDguNjIxYy00Ljc2MSwwLTguNjIxLTMuODYxLTguNjIxLTguNjIxbC0yLjA5OS04NC42NzQNCgkJCWMtMC4xMTEtNC40NzUtMy43Ny04LjA0NC04LjI0Ny04LjA0NGMtNC40NzcsMC04LjEzNSwzLjU3LTguMjQ3LDguMDQ0bC0yLjA5OSw4NC42NzRjMCw0Ljc2Mi0zLjg2MSw4LjYyMS04LjYyMSw4LjYyMQ0KCQkJYy00Ljc2MSwwLTguNjIxLTMuODYxLTguNjIxLTguNjIxbDQuMjAxLTg0LjcwOWMwLjIxNi00LjM1Ny0zLjI2Mi04LjAxLTcuNjIyLTguMDFjLTQuMDM0LDAtNy4zNzEsMy4xMzktNy42MTcsNy4xNjVMMCwxODEuMjU4DQoJCQljMCwxNi4zNjIsOC43MTYsMzAuNjg1LDIxLjc1OSwzOC41ODZjOC40ODgsNS4xNDEsMTMuMjIsMTQuNzUzLDEyLjEyNiwyNC42MTdjLTcuMzYzLDY2LjM1OC0xMi4zNjMsMTc0LjY5My0xMi4zNjMsMTg2LjQ5NA0KCQkJYzAsMTcuMTQyLDEwLjU1MSwzMS4wMzgsMjMuNTY2LDMxLjAzOGMxMy4wMTUsMCwyMy41NjYtMTMuODk3LDIzLjU2Ni0zMS4wMzhjMC0xMS44MDEtNS4wMDEtMTIwLjEzNi0xMi4zNjMtMTg2LjQ5NA0KCQkJQzU1LjE5NiwyMzQuNjAyLDU5LjkzMywyMjQuOTgyLDY4LjQxNywyMTkuODQzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K";
var book = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDI5Ni45OTkgMjk2Ljk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk2Ljk5OSAyOTYuOTk5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBkPSJNNDUuNDMyLDM1LjA0OWMtMC4wMDgsMC0wLjAxNywwLTAuMDI1LDBjLTIuODA5LDAtNS40NTEsMS4wOTUtNy40NDYsMy4wODVjLTIuMDE3LDIuMDEyLTMuMTI4LDQuNjkxLTMuMTI4LDcuNTQzDQoJCQkJdjE1OS4zNjVjMCw1Ljg0NCw0Ljc3MywxMC42MSwxMC42NDEsMTAuNjI1YzI0LjczOCwwLjA1OSw2Ni4xODQsNS4yMTUsOTQuNzc2LDM1LjEzNlY4NC4wMjNjMC0xLjk4MS0wLjUwNi0zLjg0Mi0xLjQ2MS01LjM4Mg0KCQkJCUMxMTUuMzIyLDQwLjg0OSw3MC4yMjYsMzUuMTA3LDQ1LjQzMiwzNS4wNDl6Ii8+DQoJCQk8cGF0aCBkPSJNMjYyLjE2NywyMDUuMDQyVjQ1LjY3NmMwLTIuODUyLTEuMTExLTUuNTMxLTMuMTI4LTcuNTQzYy0xLjk5NS0xLjk5LTQuNjM5LTMuMDg1LTcuNDQ1LTMuMDg1Yy0wLjAwOSwwLTAuMDE4LDAtMC4wMjYsMA0KCQkJCWMtMjQuNzkzLDAuMDU5LTY5Ljg4OSw1LjgwMS05My4zNTcsNDMuNTkzYy0wLjk1NSwxLjU0LTEuNDYsMy40MDEtMS40Niw1LjM4MnYxNjYuNzc5DQoJCQkJYzI4LjU5Mi0yOS45MjEsNzAuMDM4LTM1LjA3Nyw5NC43NzYtMzUuMTM2QzI1Ny4zOTQsMjE1LjY1MSwyNjIuMTY3LDIxMC44ODUsMjYyLjE2NywyMDUuMDQyeiIvPg0KCQkJPHBhdGggZD0iTTI4Ni4zNzMsNzEuODAxaC03LjcwNnYxMzMuMjQxYzAsMTQuOTIxLTEyLjE1NywyNy4wODgtMjcuMTAxLDI3LjEyNWMtMjAuOTgzLDAuMDUtNTUuNTgxLDQuMTUzLTgwLjA4NCwyNy4zNDQNCgkJCQljNDIuMzc4LTEwLjM3Niw4Ny4wNTItMy42MzEsMTEyLjUxMiwyLjE3MWMzLjE3OSwwLjcyNCw2LjQ2NC0wLjAyNCw5LjAxMS0yLjA1NGMyLjUzOC0yLjAyNSwzLjk5NC01LjA1MiwzLjk5NC04LjMwMVY4Mi40MjcNCgkJCQlDMjk3LDc2LjU2OCwyOTIuMjMyLDcxLjgwMSwyODYuMzczLDcxLjgwMXoiLz4NCgkJCTxwYXRoIGQ9Ik0xOC4zMzIsMjA1LjA0MlY3MS44MDFoLTcuNzA2QzQuNzY4LDcxLjgwMSwwLDc2LjU2OCwwLDgyLjQyN3YxNjguODk3YzAsMy4yNSwxLjQ1Niw2LjI3NiwzLjk5NCw4LjMwMQ0KCQkJCWMyLjU0NSwyLjAyOSw1LjgyNywyLjc4LDkuMDExLDIuMDU0YzI1LjQ2LTUuODAzLDcwLjEzNS0xMi41NDcsMTEyLjUxMS0yLjE3MWMtMjQuNTAyLTIzLjE5LTU5LjEtMjcuMjkyLTgwLjA4My0yNy4zNDINCgkJCQlDMzAuNDksMjMyLjEzLDE4LjMzMiwyMTkuOTYzLDE4LjMzMiwyMDUuMDQyeiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=";
var home = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjcuMDIgMjcuMDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI3LjAyIDI3LjAyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDMwMTA0OyIgZD0iTTMuNjc0LDI0Ljg3NmMwLDAtMC4wMjQsMC42MDQsMC41NjYsMC42MDRjMC43MzQsMCw2LjgxMS0wLjAwOCw2LjgxMS0wLjAwOGwwLjAxLTUuNTgxDQoJCWMwLDAtMC4wOTYtMC45MiwwLjc5Ny0wLjkyaDIuODI2YzEuMDU2LDAsMC45OTEsMC45MiwwLjk5MSwwLjkybC0wLjAxMiw1LjU2M2MwLDAsNS43NjIsMCw2LjY2NywwDQoJCWMwLjc0OSwwLDAuNzE1LTAuNzUyLDAuNzE1LTAuNzUyVjE0LjQxM2wtOS4zOTYtOC4zNThsLTkuOTc1LDguMzU4QzMuNjc0LDE0LjQxMywzLjY3NCwyNC44NzYsMy42NzQsMjQuODc2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMzAxMDQ7IiBkPSJNMCwxMy42MzVjMCwwLDAuODQ3LDEuNTYxLDIuNjk0LDBsMTEuMDM4LTkuMzM4bDEwLjM0OSw5LjI4YzIuMTM4LDEuNTQyLDIuOTM5LDAsMi45MzksMA0KCQlMMTMuNzMyLDEuNTRMMCwxMy42MzV6Ii8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzAzMDEwNDsiIHBvaW50cz0iMjMuODMsNC4yNzUgMjEuMTY4LDQuMjc1IDIxLjE3OSw3LjUwMyAyMy44Myw5Ljc1MiAJIi8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==";
var beer = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjIwLjQ5NXB4IiBoZWlnaHQ9IjIwLjQ5NXB4IiB2aWV3Qm94PSIwIDAgMjAuNDk1IDIwLjQ5NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAuNDk1IDIwLjQ5NTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xNi4xOTcsOC41NWgtMC45MTFjLTAuMTg4LDAtMC4zNywwLjAxOS0wLjU0OCwwLjA1MlY2LjU0NWMwLTAuMTEyLTAuMDEzLTAuMjIxLTAuMDMzLTAuMzI3DQoJCQljMC41OTktMC40NDMsMC45OTEtMS4xNDgsMC45OTEtMS45NDhjMC0xLjQ5LTEuMzcyLTIuNjg1LTIuODgzLTIuMzg2Yy0wLjUtMC41MjYtMS4yMTMtMC44MjMtMS45NDYtMC43ODYNCgkJCUMxMC4zOTksMC40Miw5LjYyLDAsOC43ODksMEM4LjExNCwwLDcuNDc2LDAuMjY4LDcuMDA2LDAuNzM0QzYuODgxLDAuNjgzLDYuNzUzLDAuNjQyLDYuNjIzLDAuNjEyTDYuNDU5LDAuNTgNCgkJCUM2LjMzMywwLjU2LDYuMjA3LDAuNTQ5LDYuMDc4LDAuNTQ3Yy0wLjE4OS0wLjAxNS0wLjM3MS0wLjAxNC0wLjU1LDAuMDAxSDUuNDc5djAuMDA0QzQuNDA1LDAuNjYsMy41LDEuMjk2LDMuMTQ1LDIuMTgzDQoJCQlDMi4wOSwyLjM4MywxLjI5LDMuMzEyLDEuMjksNC40MjJjMCwwLjc3NSwwLjM5LDEuNDU4LDAuOTgyLDEuODdDMi4yNiw2LjM3NSwyLjI0Nyw2LjQ1OCwyLjI0Nyw2LjU0NXYxMi4zMDkNCgkJCWMwLDAuOTA1LDAuNzM2LDEuNjQyLDEuNjQxLDEuNjQyaDkuMjA4YzAuOTA1LDAsMS42NDItMC43MzYsMS42NDItMS42NDJWMTYuMzRjMC4xNzgsMC4wMzMsMC4zNiwwLjA1MywwLjU0OCwwLjA1M2gwLjkxMQ0KCQkJYzEuNjU5LDAsMy4wMDktMS4zNTEsMy4wMDktMy4wMXYtMS44MjJDMTkuMjA2LDkuOTAxLDE3Ljg1Niw4LjU1LDE2LjE5Nyw4LjU1eiBNMTMuNjQzLDE4Ljg1NGMwLDAuMzAyLTAuMjQ0LDAuNTQ3LTAuNTQ3LDAuNTQ3DQoJCQlIMy44ODhjLTAuMzAyLDAtMC41NDctMC4yNDUtMC41NDctMC41NDdWNi41NDVjMC0wLjMwMiwwLjI0NS0wLjU0NywwLjU0Ny0wLjU0N2g5LjIwOGMwLjMwMywwLDAuNTQ3LDAuMjQ1LDAuNTQ3LDAuNTQ3VjE4Ljg1NHoNCgkJCSBNMTQuMTMsNS4yOEwxNC4xMyw1LjI4Yy0wLjI4Mi0wLjIzMi0wLjY0LTAuMzc3LTEuMDM0LTAuMzc3SDMuODg4Yy0wLjQxNywwLTAuNzkzLDAuMTYxLTEuMDgzLDAuNDE3DQoJCQlDMi41NDksNS4xMDMsMi4zODQsNC43ODMsMi4zODQsNC40MjJjMC0wLjY1MSwwLjUyOS0xLjE4MiwxLjE4MS0xLjE4NGwwLjQ0OC0wLjAwMkw0LjEsMi43OTdDNC4yMDIsMi4yODMsNC43MzUsMS43NCw1LjU1MiwxLjY0NQ0KCQkJaDAuNjAzYzAuMjQ1LDAuMDE3LDAuNDgxLDAuMDk3LDAuNjg5LDAuMjM0bDAuNDUyLDAuMjk5bDAuMzAzLTAuNDQ5QzcuODY3LDEuMzMyLDguMzEyLDEuMDk0LDguNzksMS4wOTQNCgkJCWMwLjU1NiwwLDEuMDUsMC4zMTUsMS4yOTIsMC44MjNsMC4xODQsMC4zODdsMC40Mi0wLjA4NmMwLjU3MS0wLjExNSwxLjE1NCwwLjEyNCwxLjQ3OCwwLjU5N2wwLjIzOSwwLjM1MmwwLjQtMC4xNDcNCgkJCWMwLjE2MS0wLjA1OSwwLjMxMi0wLjA4OCwwLjQ2MS0wLjA4OGMwLjczNywwLDEuMzM4LDAuNiwxLjMzOCwxLjMzOEMxNC42MDIsNC42NzUsMTQuNDE2LDUuMDM1LDE0LjEzLDUuMjh6IE0xNy41NjUsMTMuMzgzDQoJCQljMCwwLjc1NC0wLjYxMywxLjM2OC0xLjM2OCwxLjM2OGgtMC45MTFjLTAuMTk1LDAtMC4zOC0wLjA0Mi0wLjU0OC0wLjExNnYtNC4zMjZjMC4xNjgtMC4wNzQsMC4zNTMtMC4xMTYsMC41NDgtMC4xMTZoMC45MTENCgkJCWMwLjc1NCwwLDEuMzY4LDAuNjEzLDEuMzY4LDEuMzY4VjEzLjM4M3oiLz4NCgkJPHJlY3QgeD0iMy44ODgiIHk9IjguMDAzIiB3aWR0aD0iOS4yMSIgaGVpZ2h0PSIxMC44NTEiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==";
var vacuna = "icons/lineChart/vacuna.png";



am4core.ready(function() {
    var chart = am4core.create("lineChart", am4plugins_timeline.CurveChart);
    chart.curveContainer.padding(100, 20, 50, 20);
    chart.maskBullets = false;


    var colorSet = new am4core.ColorSet();

    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";
    chart.dateFormatter.dateFormat = "HH";

    chart.data = [{
        "category": "",
        "start": "2019-12-01",
        "end": "2020-01-01",
        "color": colorSet.getIndex(15),
        "icon": newVirus,
        "text": "Nuevo virus"
    }, {
        "category": "",
        "start": "2020-01-01",
        "end": "2020-02-01",
        "color": colorSet.getIndex(14),
        "icon": covid,
        "text": "Aparece el COVID-19"
    },
    {
        "category": "",
        "start": "2020-02-01",
        "end": "2020-03-01",
        "color": colorSet.getIndex(13),
        "icon": china,
        "text": "China confina el pais"
    },
    {
        "category": "",
        "start": "2020-03-01",
        "end": "2020-04-01",
        "color": colorSet.getIndex(12),
        "icon": casa,
        "text": "España confina el pais"
    },
    {
        "category": "",
        "start": "2020-04-01",
        "end": "2020-05-01",
        "color": colorSet.getIndex(11),
        "icon": paseo,
        "text": "Se pueden realizar actividades al aire libre"
    },
    {
        "category": "",
        "start": "2020-05-01",
        "end": "2020-06-01",
        "color": colorSet.getIndex(10),
        "icon": restaurante,
        "text": "Comienzan a abrir los comercios y la hostelería"
    },
    {
        "category": "",
        "start": "2020-06-01",
        "end": "2020-07-01",
        "color": colorSet.getIndex(10),
        "icon": coffee,
        "text": "Junio"
    },
    {
        "category": "",
        "start": "2020-07-01",
        "end": "2020-08-01",
        "color": colorSet.getIndex(10),
        "icon": dinner,
        "text": "Julio"
    },
    {
        "category": "",
        "start": "2020-08-01",
        "end": "2020-09-01",
        "color": colorSet.getIndex(10),
        "icon": coffee,
        "text": "Agosto"
    },
    {
        "category": "",
        "start": "2020-09-01",
        "end": "2020-10-01",
        "color": colorSet.getIndex(8),
        "icon": car,
        "text": "Septiembre"
    },
    {
        "category": "",
        "start": "2020-10-01",
        "end": "2020-11-01",
        "color": colorSet.getIndex(7),
        "icon": home,
        "text": "Octubre"
    },
    {
        "category": "",
        "start": "2020-11-01",
        "end": "2020-12-01",
        "color": colorSet.getIndex(7),
        "icon": book,
        "text": "Noviembre"
    },
    {
        "category": "",
        "start": "2020-12-01",
        "end": "2021-01-01",
        "color": colorSet.getIndex(6),
        "icon": beer,
        "text": "Diciembre"
    },
    {
        "category": "",
        "start": "2021-01-01",
        "end": "202-02-01",
        "color": colorSet.getIndex(5),
        "icon": vacuna,
        "text": "Comienza la vacunación"
    }];

    chart.fontSize = 10;
    chart.tooltipContainer.fontSize = 10;

    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.paddingRight = 25;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.innerRadius = 10;
    categoryAxis.renderer.radius = 30;

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());


    dateAxis.renderer.points = getPoints();


    dateAxis.renderer.autoScale = false;
    dateAxis.renderer.autoCenter = false;
    dateAxis.renderer.minGridDistance = 40;
    dateAxis.baseInterval = { count: 1, timeUnit: "month" };
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.renderer.line.strokeDasharray = "1,4";
    dateAxis.renderer.line.strokeOpacity = 0.5;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    dateAxis.tooltip.label.paddingTop = 7;
    dateAxis.endLocation = 0;
    dateAxis.startLocation = -0.5;
    dateAxis.min = new Date(2019, 4, 1, 23, 55).getTime();
    dateAxis.max = new Date(2021, 8, 11, 7, 10).getTime();

    var labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = "middle";
    labelTemplate.fillOpacity = 0.6;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor("background");
    labelTemplate.background.fillOpacity = 1;
    labelTemplate.fill = new am4core.InterfaceColorSet().getFor("text");
    labelTemplate.padding(7, 7, 7, 7);

    var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
    series.columns.template.height = am4core.percent(30);

    series.dataFields.openDateX = "start";
    series.dataFields.dateX = "end";
    series.dataFields.categoryY = "category";
    series.baseAxis = categoryAxis;
    series.columns.template.propertyFields.fill = "color"; // get color from data
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.fillOpacity = 0.6;

    var imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet1.background.radius = 18;
    imageBullet1.locationX = 1;
    imageBullet1.propertyFields.stroke = "color";
    imageBullet1.background.propertyFields.fill = "color";
    imageBullet1.image = new am4core.Image();
    imageBullet1.image.propertyFields.href = "icon";
    imageBullet1.image.scale = 0.7;
    imageBullet1.circle.radius = am4core.percent(100);
    imageBullet1.background.fillOpacity = 0.8;
    imageBullet1.background.strokeOpacity = 0;
    imageBullet1.dy = -2;
    imageBullet1.background.pointerBaseWidth = 10;
    imageBullet1.background.pointerLength = 10
    imageBullet1.tooltipText = "{text}";

    series.tooltip.pointerOrientation = "up";

    imageBullet1.background.adapter.add("pointerAngle", (value, target) => {
        if (target.dataItem) {
            var position = dateAxis.valueToPosition(target.dataItem.openDateX.getTime());
            return dateAxis.renderer.positionToAngle(position);
        }
        return value;
    });

    var hs = imageBullet1.states.create("hover")
    hs.properties.scale = 1.3;
    hs.properties.opacity = 1;

    var textBullet = series.bullets.push(new am4charts.LabelBullet());
    textBullet.label.propertyFields.text = "text";
    textBullet.disabled = true;
    textBullet.propertyFields.disabled = "textDisabled";
    textBullet.label.strokeOpacity = 0;
    textBullet.locationX = 1;
    textBullet.dy = - 100;
    textBullet.label.textAlign = "middle";

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.align = "center"
    chart.scrollbarX.width = am4core.percent(75);
    chart.scrollbarX.parent = chart.curveContainer;
    chart.scrollbarX.height = 300;
    chart.scrollbarX.orientation = "vertical";
    chart.scrollbarX.x = 128;
    chart.scrollbarX.y = -140;
    chart.scrollbarX.isMeasured = false;
    chart.scrollbarX.opacity = 0.5;

    var cursor = new am4plugins_timeline.CurveCursor();
    chart.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = categoryAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.disabled = true;

    dateAxis.renderer.tooltipLocation2 = 0;
    categoryAxis.cursorTooltipEnabled = false;

    chart.zoomOutButton.disabled = true;

    var previousBullet;

    chart.events.on("inited", function() {
        setTimeout(function() {
            hoverItem(series.dataItems.getIndex(0));
        }, 2000)
    })

    function hoverItem(dataItem) {
        var bullet = dataItem.bullets.getKey(imageBullet1.uid);
        var index = dataItem.index;

        if (index >= series.dataItems.length - 1) {
            index = -1;
        }

        if (bullet) {

            if (previousBullet) {
                previousBullet.isHover = false;
            }

            bullet.isHover = true;

            previousBullet = bullet;
        }
        setTimeout(
            function() {
                hoverItem(series.dataItems.getIndex(index + 1))
            }, 1000);
    }

});


function getPoints() {

    var points = [{ x: -1300, y: 200 }, { x: 0, y: 200 }];

    var w = 400;
    var h = 400;
    var levelCount = 4;

    var radius = am4core.math.min(w / (levelCount - 1) / 2, h / 2);
    var startX = radius;

    for (var i = 0; i < 25; i++) {
        var angle = 0 + i / 25 * 90;
        var centerPoint = { y: 200 - radius, x: 0 }
        points.push({ y: centerPoint.y + radius * am4core.math.cos(angle), x: centerPoint.x + radius * am4core.math.sin(angle) });
    }


    for (var i = 0; i < levelCount; i++) {

        if (i % 2 != 0) {
            points.push({ y: -h / 2 + radius, x: startX + w / (levelCount - 1) * i })
            points.push({ y: h / 2 - radius, x: startX + w / (levelCount - 1) * i })

            var centerPoint = { y: h / 2 - radius, x: startX + w / (levelCount - 1) * (i + 0.5) }
            if (i < levelCount - 1) {
                for (var k = 0; k < 50; k++) {
                    var angle = -90 + k / 50 * 180;
                    points.push({ y: centerPoint.y + radius * am4core.math.cos(angle), x: centerPoint.x + radius * am4core.math.sin(angle) });
                }
            }

            if (i == levelCount - 1) {
                points.pop();
                points.push({ y: -radius, x: startX + w / (levelCount - 1) * i })
                var centerPoint = { y: -radius, x: startX + w / (levelCount - 1) * (i + 0.5) }
                for (var k = 0; k < 25; k++) {
                    var angle = -90 + k / 25 * 90;
                    points.push({ y: centerPoint.y + radius * am4core.math.cos(angle), x: centerPoint.x + radius * am4core.math.sin(angle) });
                }
                points.push({ y: 0, x: 1300 });
            }

        }
        else {
            points.push({ y: h / 2 - radius, x: startX + w / (levelCount - 1) * i })
            points.push({ y: -h / 2 + radius, x: startX + w / (levelCount - 1) * i })
            var centerPoint = { y: -h / 2 + radius, x: startX + w / (levelCount - 1) * (i + 0.5) }
            if (i < levelCount - 1) {
                for (var k = 0; k < 50; k++) {
                    var angle = -90 - k / 50 * 180;
                    points.push({ y: centerPoint.y + radius * am4core.math.cos(angle), x: centerPoint.x + radius * am4core.math.sin(angle) });
                }
            }
        }
    }

    return points;
}
