import {useRef, useEffect} from 'react';

const Canvas = ({paused, data}) => {

    const draw = (ctx) => {
        ctx.clearRect(0, 0, width, height)
        ctx.beginPath()
        ctx.fillStyle = '#000000'
        ctx.fillRect(500, data, 20, 20)
        ctx.fill()
        //console.log(ctx)
    }

    const width = 1000
    const height = 500
    const canvasRef = useRef(null)

    useEffect(() => {
        //console.log('paused:',paused,', data:',data)
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (!paused){ //hooked to state update outside, no need to set interval here
                const render = () => {
                    draw(ctx)
                }
                render()
        }
    }, )//[draw])

    return <canvas ref={canvasRef} id='Canvas' width={width} height={height}/>

}

/*
const Canvas2 = ({props, paused=true, data}) => {

    //issue: canvas not rendering

    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(500, 500, 20, 0, 2*Math.PI)
        ctx.fill()
    }

    //rendering stuff on screen
    const canvasRef = useRef(null)
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0 //hook this to pause/play function
        let animationFrameId
        const render = () => {
            //console.log('paused:'+paused+', data:'+data)
            frameCount++
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        if (!paused){
            console.log(data)
            render()
            return () => {
                window.cancelAnimationFrame(animationFrameId)
            }
        }
    }, [draw, paused])
  
    return(
      <canvas ref={canvasRef} {...props}/>
    );
  }
*/

export default Canvas;