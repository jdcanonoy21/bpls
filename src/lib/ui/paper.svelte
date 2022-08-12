

<div class="paper rounded">
	<div class="paper-container">
		<slot />
	</div>
</div>

<style>

.paper {
  min-height: 300px;
  min-width: 500px;
  max-width: 500px;
  margin: auto;
  background-color: #fff;
  margin-bottom: 48px;
  -webkit-box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  word-wrap: break-word;
}
.paper-container {
  color: rgba(0,0,0,.87);
  padding: 30px;
}
</style>