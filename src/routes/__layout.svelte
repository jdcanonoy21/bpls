<script>
	import '../app.css';
	import 'svelte';
	import Header from '$lib/header-master.svelte';
	import Footer from '$lib/footer-master.svelte';
</script>



<div>
	<Header />
	<div class="mt-10">
		<slot />
	</div>
	<Footer />
</div>

