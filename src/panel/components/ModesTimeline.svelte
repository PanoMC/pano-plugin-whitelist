<style>
  .timeline {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    padding: 1.5rem 1rem;
  }

  .mode-inactive {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mode-inactive .circle {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px dashed var(--bs-border-color);
    background: var(--bs-tertiary-bg);
    color: var(--bs-secondary-color);
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mode-inactive .name {
    font-size: 0.875rem;
    color: var(--bs-secondary-color);
    margin-top: 0.5rem;
  }

  .mode-active {
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    background: var(--bs-primary-bg-subtle);
    border: 1px solid var(--bs-primary-border-subtle);
    min-width: 160px;
    text-align: center;
  }

  .mode-active .icon {
    font-size: 1.75rem;
    color: var(--bs-primary);
    margin-bottom: 0.5rem;
  }

  .mode-active .name {
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .arrow {
    color: var(--bs-secondary-color);
    font-size: 1rem;
  }
</style>

<div class="timeline">
  {#each modes as mode, i (mode.id)}
    {#if i > 0}
      <i class="fas fa-chevron-right arrow" aria-hidden="true"></i>
    {/if}

    {#if mode.isActive}
      <div class="mode-active">
        <div class="icon">
          <i class={mode.icon} aria-hidden="true"></i>
        </div>
        <div class="name">{$_(mode.nameKey)}</div>
        <span class="badge bg-success">{$_('modes.status.active')}</span>
      </div>
    {:else}
      <div class="mode-inactive">
        <div class="circle">
          <i class={mode.icon} aria-hidden="true"></i>
        </div>
        <div class="name">{$_(mode.nameKey)}</div>
      </div>
    {/if}
  {/each}
</div>

<script>
  import { _ } from '../../main';

  let { modes } = $props();
</script>
