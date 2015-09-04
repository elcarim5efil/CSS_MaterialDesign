# CSS_MaterialDesign

This project is a CSS style sheet that implements Google's Material Design Style components, only using CSS3. I wanna build my own grid system at first, but it seems a little hard for a rookie like me, so I designed to use the grid system of Bootstrap, and build my own grid system later.

Even though CSS3 is a poweful language since we can build lots of extra features for a Tag using the pseudo element (`::before`, `::after`), there is still some limits in CSS3. For example, we cannot fetch the spesific coordinates of a click and set up the position of a elments, which means the button click-waves cannot be positioned according to the mouse clicks without the implementation of JavaSript.

Howerver, I still wanna build this style sheet in pure CSS3 not using any JavaScript, just like what Bootstrap did. Since I am extract the grid system of Bootstrap at the first place, this project is just like a Bootstrap Theme but a independent CSS3 frameworks which I am looking forward to develop.

In order to develop this style sheet, I refer to the source code of the [Bootstrap](http://getbootstrap.com/) and the source code of another great framework named [Materialize](http://materializecss.com/) which is also the inspiration of this project.

So far, serval basic components are completed:
- Button
- RoundButton(Add Button, Minus Button)
- Navigatior
- Progressbar
- Collection
- Form elements(Input, Switch, Checkbox, Radio, Rang Slider)
- Wave Animaitons
 
you can check out the [demo](http://elcarim5efil.github.io/projects/CSS_MD/main_demo.html) on my personal page.
- 


But some of them is not fully avaible, because the background color cannot be changed with just a class selector(which means the background-color of a element is fixed).

Besides making the MD Style purely in CSS3, I also want to make the HTML structure of the component more concise(using as less TAG as possbile for building a component). Somehow, there are lots of problem to achieve this goal, but I will try.
