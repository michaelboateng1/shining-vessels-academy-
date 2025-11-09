<script>
    import {onMount} from "svelte";
    import { tick } from "svelte";

    import botIcon from "$lib/assets/agent-seller-svgrepo-com.svg";

    
    let prompt;
    let tempStorePrompt = $state('');
    let displayChats = $state([])
    let chatContainer;
    
    let openChat = $state(false);

    const hundleOpenChat = () => {
            openChat = !openChat

            const body = document.querySelector('body');
            body.style.overflow = window.innerWidth < 629 && openChat ? 'hidden' : '';
            window.addEventListener("resize", () => {
                console.log(window.innerWidth < 629 && openChat)
                body.style.overflow = window.innerWidth < 629 && openChat ? 'hidden' : '';
            })
    }
    
    onMount(() => {
        displayChats = getAllChat();
    })

    const getAllChat = () => {
        try{
            return localStorage.getItem("allChats") ? JSON.parse(localStorage.getItem("allChats")) : "No chat available";
        }catch(err){
            console.log(err)
        }
    }

    const storeChat = (prompt, reply) => {
        try{
        const addZero = (time) => {
            return time.toString().length >= 2 ? time : `0${time}`;
        }
        const chat = {
            time: `${addZero(new Date().getHours())}:${addZero(new Date().getMinutes())}:${addZero(new Date().getSeconds())}`,
            date: `${addZero(new Date().getDate())}/${addZero(new Date().getUTCMonth())}/${new Date().getFullYear()}`,
            prompt: prompt,
            reply: reply
        }

        const allChats = localStorage.getItem("allChats") ? JSON.parse(localStorage.getItem("allChats")) : localStorage.setItem("allChats",JSON.stringify([chat]));

        localStorage.setItem("allChats", JSON.stringify([...allChats, chat]));

        }catch (err){
            console.log(err)
        }
    }

    const sendPrompt = async () => {
        try{
            if(prompt.value){
                tempStorePrompt = prompt.value;
                prompt.value = "";
                scrollToChat();
                displayChats = [...displayChats, {"prompt": tempStorePrompt.trim()}]

                await tick();
                setTimeout(() => scrollToChat(), 100);

                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(tempStorePrompt)
                }
                const response = await fetch('/api/chat-bot/', options);
                const data = await response.json();
                displayChats = [...displayChats, {"reply": data.reply.trim()}]
                
                await tick();
                setTimeout(() => scrollToChat(), 100);
                storeChat(tempStorePrompt, data.reply);
            }
        }catch (err) {
            console.log(err)
        }
    }

    const scrollToChat = () => {
        chatContainer.scrollTo({
                top: chatContainer.scrollHeight,
                left: 0,
                behavior: "smooth",
            });
    }


</script>

<section class="{openChat ? 'translate-y-0' : 'translate-y-500'} tansition-transform duration-1000 transform flex fixed flex-col justify-start z-40 bottom-0 right-0 w-full h-full sm:w-[400px] sm:h-[400px] sm:drop-shadow-xl sm:rounded-lg sm:overflow-hidden sm:bottom-5 sm:right-5 bg-white">
    <div class="py-2 w-full bg-[#04095d] text-white text-2xl text-center flex items-center justify-between px-5 space-y-2">
        <div class="flex flex-col space-y-2 items-center justify-center">
            <h2><span class="uppercase text-[#fb8961]">SVA</span> Chatbot</h2>
            <p class="text-sm">Chat with our bot for any info</p>
        </div>
        <i onclick={() => hundleOpenChat()} tabindex='0' role="button" onkeydown={() => openChat} class="fa-solid fa-minus cursor-pointer"></i>
    </div>
    <div bind:this={chatContainer} class="chat-container flex-1 font-normal w-full h-full bg-white overflow-y-scroll flex flex-col gap-[10px] text-sm text-[#333] px-4 py-5">
        {#each displayChats as displayChat }
            {#if displayChat.prompt}
                <div class="message sender flex-start bg-[#2563eb] ml-auto text-wrap  h-auto">{displayChat.prompt}</div>
            {/if}
            {#if displayChat.reply }
                <div class="message bot-reply mr-auto text-wrap bg-[#16a34a] h-auto">{displayChat.reply}</div>
            {/if}
        {/each}
    </div>
    <form onsubmit={() => sendPrompt()} class="flex justify-between items-center gap-5 p-2 bg-[#04095d]">
        <input bind:this={prompt} type="text" autofocus placeholder="How can I help you..." class="flex-1 w-full bg-white rounded-2xl border-2 border-[#fb8961]" />
        <button type="submit" class="bg-white px-3 py-2 rounded-2xl border-2 border-[#fb8961] text-[#04095d]" >Send</button>
    </form>
</section>

<section class="{openChat ? 'opacity-0 hide' : 'show opacity-100'} transition-opacity duration-1000 fixed bottom-5 right-5 sm:bottom-10 sm:bottom-10 z-40">
    <div onclick={() => hundleOpenChat()} role="button" tabindex="0" onkeydown={() => openChat} class="w-[70px] sm:w-[100px] cursor-pointer">
        <img src={botIcon} alt="SVA Agent" class="w-full h-full object-cover shadow-lg rounded-full" />
    </div>
</section>


<style>

    .hide{
        visibility: hidden;
    }

    .show{
        visibility: visible;
    }
 
    .message {
      max-width: 70%;
      padding: 10px 14px;
      border-radius: 12px;
      color: #fff;
      font-size: 15px;
      opacity: 0;
    }
    
    .sender {
      border-bottom-right-radius: 0;
      animation: slideFromLeft 0.4s ease forwards;
    }
    
    .bot-reply {
      align-self: flex-end;
      border-bottom-left-radius: 0;
      animation: slideFromRight 0.4s ease forwards;
    }
    
    .message:nth-child(1) { animation-delay: 0s; }
    .message:nth-child(2) { animation-delay: 0.4s; }
    .message:nth-child(3) { animation-delay: 0.8s; }
    .message:nth-child(4) { animation-delay: 1.2s; }

    .bot-reply:nth-child(1) { animation-delay: 0s; }
    .bot-reply:nth-child(2) { animation-delay: 0.4s; }
    .bot-reply:nth-child(3) { animation-delay: 0.8s; }
    .bot-reply:nth-child(4) { animation-delay: 1.2s; }
    
    @keyframes slideFromLeft {
      from { opacity: 0; transform: translateX(-25px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideFromRight {
      from { opacity: 0; transform: translateX(25px); }
      to { opacity: 1; transform: translateX(0); }
    }
</style>